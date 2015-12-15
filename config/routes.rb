Rails.application.routes.draw do
  root to: "api/groups#index"

  namespace :api do
    resources :groups
  end

  resources :users
  resource :session
end
