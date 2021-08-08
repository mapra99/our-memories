Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  
  root to: 'react/posts#index'

  # react namespace
  scope module: 'react' do
    resources :posts, only: [:index]
  end

  # api namespace
  namespace :api do
    defaults format: :json do
      resources :posts, only: %i[index create destroy]
    end
  end
end
