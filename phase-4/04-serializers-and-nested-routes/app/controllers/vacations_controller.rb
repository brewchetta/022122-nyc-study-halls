class VacationsController < ApplicationController
  before_action :find_person_vacations
  before_action :find_vacation, only: [:show, :update, :destroy]

  def index
      render json: @all_vacations
  end

  def show
    render json: @vacation
  end

  def create
    vs = Vacation.create!(vacation_params)
    render json: vs, status: :created
  end

  def update
    @vacation.update!(vacation_params)
    render json: @vacation, status: :accepted
  end

  def destroy
    @vacation.destroy
    render json: @vacation, status: :accepted
  end

  private

  def find_person_vacations
    if params[:person_id]
      @all_vacations = Vacation.where(person_id: params[:person_id])
    else
      @all_vacations = Vacation.all
    end
  end

  def find_vacation
    @vacation = @all_vacations.find(params[:id])
  end

  def vacation_params
    params.permit(:arrival, :departure, :person_id, :vacation_spot_id)
  end

end
