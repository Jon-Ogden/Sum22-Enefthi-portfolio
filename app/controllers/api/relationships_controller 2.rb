class Api::RelationshipsController < ApplicationController
    before_action :set_user, except: [:all_relationships, :destroy_relationship, :create]
    before_action :set_relationship, only: [:update]

    def all_relationships
        render json: Relationship.all
    end
    def index
        render json: {followers:@user.followers, followees:@user.followees}
    end
    def show
        render json: @relationship
    end
    def create
        @relationship = Relationship.new(relationship_params)
        if(@relationship.save)
            render json: @relationship
        else
            render json @relationship.errors.full_messages, status:422
        end
    end
    def destroy_relationship
        @relationship = Relationship.find(params[:id])
        render json: @relationship.destroy
    end

    private
    def set_user
        @user = User.find(params[:user_id])
    end
    def set_relationship
        @relationship = @user.relationships.find(params[:id])
    end
    def relationship_params
        params.require(:relationship).permit(:follower_id, :followee_id)
    end
end
