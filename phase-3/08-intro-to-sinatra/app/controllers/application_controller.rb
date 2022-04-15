class ApplicationController < Sinatra::Base

  get '/' do
    "Hello Frank"
  end

  get '/hamburgers' do
    "<h1>We love hamburgers</h1>"
  end

  # INDEX
  get '/albums' do
    Album.all.to_json
  end

  # INDEX
  get '/songs' do
    Song.all.to_json
  end

  # SHOW
  get '/songs/:id' do
    song = Song.find(params[:id])
    song.to_json(only: :title)
  end

end
