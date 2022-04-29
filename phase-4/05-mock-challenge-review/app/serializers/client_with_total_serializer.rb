class ClientWithTotalSerializer < ActiveModel::Serializer
  attributes :id, :name, :age, :total_charges
end
