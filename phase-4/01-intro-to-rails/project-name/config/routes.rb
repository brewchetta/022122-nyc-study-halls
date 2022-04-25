Rails.application.routes.draw do
  get '/wabbits', to: 'wabbits#index'
  get '/wabbits/:id', to: 'wabbits#show'
  # METHOD # ROUTE # CONTROLLER # ACTION #
  get '/seasons', to: 'seasons#index'
  get '/seasons/:id', to: 'seasons#show'

  post '/seasons', to: 'seasons#create'

  patch '/seasons/:id', to: 'seasons#update'

  delete '/seasons/:id', to: 'seasons#destroy'
  # INDEX SHOW CREATE UPDATE DESTROY #

  # post '/login', to: 'sessions#create'
end
