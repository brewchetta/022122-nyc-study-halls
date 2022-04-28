class PeopleController < ApplicationController
  before_action :find_person, only: [:show, :update, :destroy]

  def index
      render json: Person.all
  end

  def show
    render json: @person, serializer: ShowPersonRouteAFewMoreWordsPandasSerializer
  end

  def create
    vs = Person.create!(person_params)
    render json: vs, status: :created
  end

  def update
    @person.update!(person_params)
    render json: @person, status: :accepted
  end

  def destroy
    @person.destroy
    render json: @person, status: :accepted
  end

  private

  def find_person
    @person = Person.find(params[:id])
  end

  def person_params
    params.permit(:name)
  end
end
