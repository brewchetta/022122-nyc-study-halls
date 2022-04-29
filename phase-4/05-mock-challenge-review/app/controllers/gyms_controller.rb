class GymsController < ApplicationController
  before_action :find_gym, only: [:show, :destroy]

  def show
    render json: @gym
  end

  def destroy
    @gym.destroy
    head :no_content, status: 204
  end

  private

  def find_gym
    @gym = Gym.find(params[:id])
  end

end
