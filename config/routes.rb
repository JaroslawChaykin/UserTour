Rails.application.routes.draw do
  get 'promo', to: 'promo#index'
  resources :posts
  resources :posts do
    resources :comments
  end
  get 'posts/index'

  root 'posts#index'
end
