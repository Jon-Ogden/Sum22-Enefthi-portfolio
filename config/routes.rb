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
    get '/sales', to:'sales#all_sales'
    get '/relationships', to:'relationships#all_relationships'
    get '/liked_nfts', to:'liked_nfts#all_likes'
    delete '/sales/:id', to:'sales#destroy_sale'
  end
end
