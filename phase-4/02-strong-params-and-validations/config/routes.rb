Rails.application.routes.draw do

  # countries
  get '/countries', to: 'countries#index'
  get '/countries/:id', to: 'countries#show'

  # citizens
  get '/citizens', to: 'citizens#index'
  get '/citizens/:id', to: 'citizens#show'
  post '/citizens', to: 'citizens#create'

  # passports
  delete '/passports/:id', to: 'passports#destroy'

end
