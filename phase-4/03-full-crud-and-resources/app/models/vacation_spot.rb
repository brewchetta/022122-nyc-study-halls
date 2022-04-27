class VacationSpot < ApplicationRecord

  # validates :weather, inclusion: { in: %w(hot cold warm), message: "%{value} is not hot, cold, or warm" }

  validate :validate_weather

  def validate_weather
    unless /warm|cold|hot/i.match(weather)
      errors.add(:weather, "has to include hot, cold, or warm since those are the only types of weather!")
    end
  end

end
