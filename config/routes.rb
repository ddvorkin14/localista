Rails.application.routes.draw do
  get "up" => "rails/health#show", as: :rails_health_check
  root to: 'homepage#index'
  
  devise_for :admin_users, ActiveAdmin::Devise.config
  devise_for :users, controllers: {
    sessions: 'users/sessions'
  }, path: "/", path_names: { 
    sign_in: 'login', 
    sign_out: 'logout',
    sign_up: 'signup'
  }

  get 'onboarding' => 'onboarding#index'
  post 'search' => 'homepage#search'

  ActiveAdmin.routes(self)
  resources :users
  
  resources :interests do
    collection do
      post :add_interest
      delete :remove_interest
    end
  end

  # namespace :admin do
  #   resources :users
  # end

  # namespace :api do
  #   namespace :v1 do
  #     resources :users
  #   end
  # end
end
