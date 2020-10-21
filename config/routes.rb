Rails.application.routes.draw do
  get 'about', to: 'about#index'
  get 'promo', to: 'promo#index'
  resources :posts
  resources :posts do
    resources :comments
  end
  resources :subscribers
  get 'posts/index'

  root 'posts#index'
end
