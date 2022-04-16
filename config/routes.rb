Rails.application.routes.draw do
  # todo uncomment this, when Ui is ready
  devise_for :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  root to: 'react/posts#index'

  # react namespace
  scope module: 'react' do
    resources :posts, only: [:index]
  end

  # api namespace
  namespace :api do
    defaults format: :json do
      resources :posts, only: %i[index create destroy update]
      resources :users, only: [] do
        get 'current', on: :collection
      end
    end
  end
end
