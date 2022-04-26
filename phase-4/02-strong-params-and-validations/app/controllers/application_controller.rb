class ApplicationController < ActionController::API
    rescue_from ActiveRecord::RecordInvalid, with: :render_invalid
    rescue_from ActiveRecord::RecordNotFound, with: :record_not_found

    private

    def render_invalid(invalid)
      render json: { errors: invalid.record.errors.full_messages }, status: 200
    end

    def record_not_found
      render json: { message: "HOT DAMN I COULDN'T FIND THAT" }, status: 404
    end
end
