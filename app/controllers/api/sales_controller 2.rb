class Api::SalesController < ApplicationController
    before_action :set_nft, except: [:all_sales]
    before_action :set_sale, only: [:show, :destroy, :update]
    
    def all_sales
        render json: Sale.all
    end
    
    def index
        render json: @nft.sales
    end
    
    def show
        render json: @sale
    end
    
    def create
        @sale = @nft.sales.new(sale_params)
        if(@sale.save)
            render json: @sale
        else
            render json @sale.errors.full_messages, status:422
        end
    end
    
    def update
        if(@sale.update(sale_params))
            render json: @sale
        else
            render json: @sale.errors.full_messages, status: 422
        end
    end
    
    def destroy_sale
        sale = sale.find(params[:id])
        render json: sale.destroy
    end
    
    private
    def set_nft
        @nft = Nft.find(params[:nft_id])
    end
    def set_sale
        @sale = @nft.sales.find(params[:id])
    end
    def sale_params
        params.require(:sale).permit(:price, :sold_by, :purchased_by)
    end
end


