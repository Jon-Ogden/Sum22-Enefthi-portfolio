class Api::UsersController < ApplicationController

    def all_users
        render json: User.all
    end


end
