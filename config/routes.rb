Rails.application.routes.draw do
  root to: "static_pages#root"

  namespace :api, defaults: { format: :json } do
    resources :groups, except: [:new, :edit] do
      resources :events, only: [:create, :index]
    end
  end

  resources :users, only: [:create]
  resource :session, only: [:destroy]

  get 'signup' => 'users#new'
  get 'login' => 'sessions#new'
  post'login' => 'sessions#create'
end
