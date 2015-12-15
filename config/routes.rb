Rails.application.routes.draw do
  root to: "api/groups#index"

  namespace :api do
    resources :groups
  end

  resources :users, only: [:create, :new]
  resource :session, only: [:create, :new, :destroy]

  # get 'signup' => 'users#new'
  # get 'login' => 'sessions#new'
  # post'login' => 'sessions#create'
end
