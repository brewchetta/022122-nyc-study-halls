class CreateCars < ActiveRecord::Migration[7.0]
  def change
    create_table :cars do |table|
      table.text :make
      table.string :model
      table.integer :cylinders
      table.datetime :year
      table.text :color
    end
  end
end

# CREATE TABLE cars (
#   id INTEGER PRIMARY KEY,
#   make TEXT,
#   model TEXT,
#   cylinders INTEGER,
#   year INTEGER,
#   color TEXT
# )
