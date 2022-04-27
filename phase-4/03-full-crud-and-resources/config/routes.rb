Rails.application.routes.draw do
  resources :vacation_spots, only: [:index, :show, :create, :update, :destroy]
end
