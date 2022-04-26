class Citizen < ApplicationRecord
  has_many :passports, dependent: :destroy
  has_many :countries, through: :passports

  # validates attribute, options
  validates :name, presence: true, length: { in: 1..3, message: "NOPE" }
end
