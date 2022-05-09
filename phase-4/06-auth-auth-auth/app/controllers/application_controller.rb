class ApplicationController < ActionController::API
  before_action :authorized?

  include ActionController::Cookies

  private

  def authorized?
    render json: { message: "You are not authorized" }, status: :unauthorized unless User.find_by(id: session[:user_id])
  end

end
