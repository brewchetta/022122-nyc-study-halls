class Passport < ApplicationRecord
  belongs_to :citizen
  belongs_to :country
end
