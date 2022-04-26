class PassportsController < ApplicationController
  before_action :find_passport, only: [:destroy]

  def destroy
    # let's cause some DESTRUCTION
    @passport.destroy
    render json: @passport, status: :accepted
  end

  private
  ###############################################################

  def find_passport
    @passport = Passport.find(params[:id])
  end

end
