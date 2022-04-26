class Country < ApplicationRecord
  has_many :passports, dependent: :destroy
  has_many :citizens, through: :passports
end
