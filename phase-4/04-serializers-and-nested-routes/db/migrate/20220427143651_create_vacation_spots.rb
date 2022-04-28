class CreateVacationSpots < ActiveRecord::Migration[7.0]
  def change
    create_table :vacation_spots do |t|
      t.string :name
      t.string :weather
      t.integer :hours_from_here

      t.timestamps
    end
  end
end
