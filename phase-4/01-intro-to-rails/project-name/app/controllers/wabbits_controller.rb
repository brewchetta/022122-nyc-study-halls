class WabbitsController < ApplicationController
  def index
    # ALL
    render json: Wabbit.all
  end

  def show
    # FIND BY ID
    found_wabbit = Wabbit.find_by(id: params[:id])
    render json: found_wabbit
  end
end
