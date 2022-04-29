class ClientsController < ApplicationController

  def show
    client = Client.find(params[:id])
    render json: client, only: [:id, :name], methods: :total_charges
    # render json: client, serializer: ClientWithTotalSerializer
  end

end
