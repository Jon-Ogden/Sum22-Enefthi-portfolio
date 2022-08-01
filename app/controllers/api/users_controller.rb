class Api::UsersController < ApplicationController
    before_action :set_user, only: [:show, :update]

    def all_users
        render json: User.all
    end

    def show
        @user = User.find(params[:id])
        render json: @user
    end

    def update
        if @user.update(user_params)
            render json: @user
        else
            render json: {errors: @user.errors.full_messages}, status:422
        end
    end

    private
    def set_user
        @user = User.find(params[:id])
    end
    def user_params
        params.require(:user).permit(:name, :email, :image, :username, :password, :sale_date, :file)
    end
end
