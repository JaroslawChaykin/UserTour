Rails.application.routes.draw do
<<<<<<< Updated upstream
  get 'about', to: 'about#index'
  get 'promo', to: 'promo#index'
=======
  get 'about/index'
>>>>>>> Stashed changes
  resources :posts
  resources :posts do
    resources :comments
  end
  resources :subscribers
  get 'posts/index'

  root 'about#index'
end
