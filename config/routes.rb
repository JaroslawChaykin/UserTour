Rails.application.routes.draw do
  get 'landing/index'
  resources :follows
  resources :categories
  mount Ckeditor::Engine => '/ckeditor'
  devise_for :users
  get 'about', to: 'about#index'
  get 'promo', to: 'promo#index'
  get 'home', to: 'landing#index'
  get 'categories', to: 'categories#index'
  resources :posts
  resources :posts do
    resources :comments
  end
  resources :posts do
    resources :comments
    resources :likes
    resources :favorites
  end
  resources :subscribers

  resources :users
  post 'users/:id/follow', to: "users#follow", as: "follow_user"
  post 'users/:id/unfollow', to: "users#unfollow", as: "unfollow_user"
  get 'users/:id/following', :to => "users#following", :as => :following

  get 'posts/index'
  get 'users', to: 'users#index'
  get 'users/:id' => 'users#show'
  delete 'users/:id', to: 'users#destroy'

  root 'posts#index'
end
