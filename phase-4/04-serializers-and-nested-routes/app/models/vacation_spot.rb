class VacationSpot < ApplicationRecord

  has_many :vacations
  has_many :people, through: :vacations

  validate :validate_weather

  def validate_weather
    unless /warm|cold|hot/i.match(weather)
      errors.add(:weather, "has to include hot, cold, or warm since those are the only types of weather!")
    end
  end

end
