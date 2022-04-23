Rails.application.routes.draw do
  # todo uncomment this, when Ui is ready
  devise_for :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  root to: 'react#index'

  # react namespace
  scope module: 'react' do
    get '/posts/(*subpath)', action: 'index'
    get '/albums/(*subpath)', action: 'index'
  end

  # api namespace
  namespace :api do
    defaults format: :json do
      resources :albums, only: %i[index create]
      resources :posts, only: %i[index create destroy update]
      resources :users, only: [] do
        get 'current', on: :collection
      end
    end
  end
end
