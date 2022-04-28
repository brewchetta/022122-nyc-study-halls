class CreateVacations < ActiveRecord::Migration[7.0]
  def change
    create_table :vacations do |t|
      t.string :arrival
      t.string :departure
      t.integer :vacation_spot_id
      t.integer :person_id

      t.timestamps
    end
  end
end
