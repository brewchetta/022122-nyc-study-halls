class Person < ApplicationRecord
  has_many :vacations
  has_many :vacation_spots, through: :vacations
end
