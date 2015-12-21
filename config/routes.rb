Rails.application.routes.draw do
  root to: "static_pages#root"

  namespace :api, defaults: { format: :json } do
    resources :groups, except: [:new, :edit] do
      resources :events, only: [:create, :index]
    end
    resources :events, only: [:show, :destroy]
  end

  resources :users, only: [:create, :show, :index]

  get 'signup' => 'users#new'
  get 'login' => 'sessions#new'
  post'login' => 'sessions#create'
  delete 'logout' => 'sessions#destroy'
end
