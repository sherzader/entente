Rails.application.routes.draw do
  get 'static/pages'

  root to: "api/groups#index"

  namespace :api, defaults: { format: :json } do
    resources :groups, except: [:new, :edit]
  end

  resources :users, only: [:create]
  resource :session, only: [:destroy]

  get 'signup' => 'users#new'
  get 'login' => 'sessions#new'
  post'login' => 'sessions#create'
end
