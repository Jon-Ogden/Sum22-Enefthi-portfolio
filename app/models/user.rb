# frozen_string_literal: true

class User < ActiveRecord::Base
  has_many :nfts
  
  has_many :followed_users, foreign_key: :follower_id, class_name: "Relationship"
  has_many :followees, through: :followed_users, :dependent => :delete_all

  has_many :following_users, foreign_key: :followee_id, class_name: "Relationship"
  has_many :followers, through: :following_users, :dependent => :delete_all

  extend Devise::Models
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
  include DeviseTokenAuth::Concerns::User
end
