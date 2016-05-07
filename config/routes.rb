Rails.application.routes.draw do
  root to: "static_pages#root"

  namespace :api, defaults: { format: :json } do
    resources :groups, except: [:new, :edit] do
      resources :events, only: [:create, :index]
    end
    resources :users_groups, only: [:create, :destroy, :index]
    resources :events, only: [:show, :destroy, :update]
  end

  resources :users, only: [:create, :new]
  resources :users, defaults: { format: :json }, only: [:show, :index]

  get 'signup' => 'users#new'
  get 'login' => 'sessions#new'
  post 'login' => 'sessions#create'
  delete 'logout' => 'sessions#destroy'
end
