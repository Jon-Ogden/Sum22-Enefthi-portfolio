class Api::NftsController < ApplicationController
    before_action :set_nft, only: [:show, :update, :destroy]
    before_action :set_page, only: [:paginate_all]

    def index
        render json: Nft.all
    end

    def show
        render json: @nft
    end

    def destroy
        render json: @nft.destroy
    end


    def update
        if @nft.update(nft_params)
            render json: @nft
        else 
            render json:{errors: @nft.errors.full_messages}, status:422
        end
    end

    def paginate_all
        nfts = Nft.all
        nfts = Kaminari.paginate_array(nfts).page(@page).per(25)
        render json: {nfts:nfts, total_pages:nfts.total_pages}
    end
    def create
        # getting file from client
        puts "Hello"
        file = params[:file]
        title = params[:title]
        listPrice = params[:listPrice]
        for_sale = params[:for_sale]
        description = params[:description]
        user_id = params[:user_id]
        puts user_id
        puts file
        begin
            # save imagine to cloudinary if client gave us one
            if file
              cloud_image = Cloudinary::Uploader.upload(file, public_id: file.original_filename, secure: true, resource_type: :auto)
            end
            image_url =  cloud_image ? cloud_image["secure_url"] : ''
            # succesfull saved to cloudinary add to db
            nft = Nft.new(image: image_url, price: listPrice, title: title, for_sale:for_sale, description: description , user_id: user_id)
            if(nft.save)
                # we success create user to our db
                render json: nft
            else
                # we unsuccessfully create user to our db
                render json: {errors: nft.errors.full_messages}, status: 422
            end
        
        rescue => e
            # if this is unsucessfully saved to cloudinary than we will come here
            # and e will give us an idea about why it didn't
            render json: {errors: e}, status: 400
        end
    end
    private
    def set_nft
        @nft = Nft.find(params[:id])
    end
    def nft_params
        params.require(:nft).permit(:price, :description, :image, :user_id, :for_sale, :sale_date, :file, :creator_id)
    end
    def set_page
        @page = params[:page] || 1
    end
  
    
end
