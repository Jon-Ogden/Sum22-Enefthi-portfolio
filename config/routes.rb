Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  namespace :api do
    resources :nfts do
      resources :sales
      
      
    end
    get '/users', to:'users#all_users'
    post '/relationships', to:'relationships#create'
    delete '/relationships/:id', to:'relationships#destroy_relationship'
    delete '/liked_nfts/:id', to:'liked_nfts#destroy'
    post '/liked_nfts', to:'liked_nfts#create'
    get '/nfts/:nft_id/liked_nfts', to:'liked_nfts#nft_likes'
    get '/users/:user_id/liked_nfts', to:'liked_nfts#user_likes'
    resources :users do
      resources :relationships
      resources :liked_nfts
    end
    get '/sales', to:'sales#all_sales'
    get '/relationships', to:'relationships#all_relationships'
    get '/liked_nfts', to:'liked_nfts#all_likes'
    delete '/sales/:id', to:'sales#destroy_sale'
    get '/nfts/page/:page', to:'nfts#paginate_all'
  end
end
