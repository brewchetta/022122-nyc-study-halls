class SeasonsController < ApplicationController
  before_action :find_season, only: [:show, :update, :destroy]

  def index
    render json: Season.all, only: :game, include: {hunters: {only: :name}}
  end

  def show
    render json: @season
  end

  def update
    @season.update(params)
    render json: @season
  end

  def destroy
    @season.destroy
    render
  end

  private

  def find_season
    @season = Season.find(params[:id])
  end
end
