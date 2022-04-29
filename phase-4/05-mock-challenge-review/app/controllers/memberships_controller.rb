class MembershipsController < ApplicationController

  def create
    new_membership = Membership.create!(memberships_params)
    render json: new_membership, status: :created
  end

  private

  def memberships_params
    params.permit(:client_id, :gym_id, :charge)
  end

end
