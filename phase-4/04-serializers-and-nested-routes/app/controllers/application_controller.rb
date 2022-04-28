class ApplicationController < ActionController::API
  rescue_from ActiveRecord::RecordInvalid, with: :record_invalid

  private

  def record_invalid(error)
      error_messages = error.record.errors.full_messages
      render json: error_messages, status: 422
  end

end
