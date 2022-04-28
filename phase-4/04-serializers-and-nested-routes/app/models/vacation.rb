class Vacation < ApplicationRecord
  belongs_to :person
  belongs_to :vacation_spot
end
