class Api::LikedNftsController < ApplicationController
    def all_likes
        render json: LikedNft.all
    end
    def destroy
        @like = LikedNft.find(params[:id])
        render json: @like.destroy
    end
    def user_likes
        @user = User.find(params[:user_id])
        render json: @user.liked_nfts
    end
    def nft_likes
        render json: LikedNft.nft_likes(params[:nft_id])
    end
    def create
        like = LikedNft.new(liked_nft_params)
        if(like.save)
            render json: like
        else
            render json: like.errors.full_messages, status:422
        end
    end

    private
    def liked_nft_params
        params.require(:liked_nft).permit(:user_id, :nft_id)
    end

end
