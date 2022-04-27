class VacationSpotsController < ApplicationController
  before_action :find_vacation_spot, only: [:show, :update, :destroy]

  def index
      render json: VacationSpot.all
  end

  def show
    render json: @vacation_spot, serializer: VacationSpotShowSerializer
  end

  def create
    vs = VacationSpot.create!(vs_params)
    render json: vs, status: :created
  end

  def update
    @vacation_spot.update!(vs_params)
    render json: @vacation_spot, status: :accepted
  end

  def destroy
    @vacation_spot.destroy
    render json: @vacation_spot, status: :accepted
  end

  private

  def find_vacation_spot
    @vacation_spot = VacationSpot.find(params[:id])
  end

  def vs_params
    params.permit(:name, :weather, :hours_from_here)
  end

end
