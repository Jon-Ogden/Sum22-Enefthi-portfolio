class Api::UsersController < ApplicationController

    def all_users
        render json: User.all
    end
    def show
        @user = User.find(params[:id])
        render json: @user
    end
end
