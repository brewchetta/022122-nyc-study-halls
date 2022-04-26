class CitizensController < ApplicationController
  before_action :find_citizen, only: [:show, :update, :destroy]

  def index
    render json: Citizen.all
  end

  def show
    render json: @citizen, include: :countries
  end

  def create
    new_citizen = Citizen.create!(citizen_params)
    render json: new_citizen, status: :created
  end

  private

  def find_citizen
    @citizen = Citizen.find(params[:id])
  end

  def citizen_params
    params.require(:citizen).permit(:name)
  end

end
