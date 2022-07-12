class Api::LikedNftsController < ApplicationController
    def all_likes
        render json: Liked_nft.all
    end
end
