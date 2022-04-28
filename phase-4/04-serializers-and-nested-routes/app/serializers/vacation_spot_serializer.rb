class VacationSpotSerializer < ActiveModel::Serializer
  attributes :id, :name, :weather

  has_many :vacations
  has_many :people
  # vacation_spot --< vacations >-- person
end
