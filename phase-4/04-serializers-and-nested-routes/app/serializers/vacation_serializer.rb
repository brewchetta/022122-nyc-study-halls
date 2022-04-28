class VacationSerializer < ActiveModel::Serializer
  attributes :id

  belongs_to :person
  belongs_to :vacation_spot

  # vacation_spot --< vacations >-- person
end
