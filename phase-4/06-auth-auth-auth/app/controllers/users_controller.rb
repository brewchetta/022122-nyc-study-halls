class UsersController < ApplicationController
  skip_before_action :authorized?, only: :create

  def create
    user = User.create!(username: params[:username], password: params[:password])
    session[:user_id] = user.id
    render json: user
  end

  def show
    # if we have /:id we are getting any user
    if params[:id]
      user = User.find(params[:id])
      render json: user
    end

    # if we don't have /:id we are authenticating a logged in user
    user = User.find_by(id: session[:user_id])
    if user
      render json: user
    else
      render json: { message: "No user logged in" }, status: :unauthorized
    end

  end # end show

end
