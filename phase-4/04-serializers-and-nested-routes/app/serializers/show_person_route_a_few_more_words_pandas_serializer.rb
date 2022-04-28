class ShowPersonRouteAFewMoreWordsPandasSerializer < ActiveModel::Serializer
  attributes :name, :created_at

  has_many :vacation_spots, serializer: WeatherSerializer
end
