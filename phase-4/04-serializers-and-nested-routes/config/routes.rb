Rails.application.routes.draw do

  resources :people do
    resources :vacations
  end

  resources :vacations

  resources :vacation_spots, path: "vacation-spots"
  
end
