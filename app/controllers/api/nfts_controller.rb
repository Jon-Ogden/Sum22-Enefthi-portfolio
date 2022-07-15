class Api::NftsController < ApplicationController
    before_action :set_nft, only: [:show, :update, :destroy]

    def index
        render json: Nft.all
    end

    def show
        render json: @nft
    end

    def destroy
        render json: @nft.destroy
    end

    def create
        nft = Nft.new(nft_params)
        if(nft.save)
            render json: nft
        else
            render json: nft.errors.full_messages, status:422
        end
    end

    def update
        if @nft.update(nft_params)
            render json: @nft
        else 
            render json:{errors: @nft.errors.full_messages}, status:422
        end
    end

    private
    def set_nft
        @nft = Nft.find(params[:id])
    end
    def nft_params
        params.require(:nft).permit(:price, :description, :image, :user_id, :for_sale, :sale_date)
    end
end
