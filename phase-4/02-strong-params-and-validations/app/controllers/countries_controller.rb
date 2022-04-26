class CountriesController < ApplicationController
  before_action :find_country, only: [:show, :update, :destroy]

  def index
    render json: Country.all
  end

  def show
    render json: @country, include: :citizens
  end

  private

  def find_country
    @country = Country.find(params[:id])
  end

end
