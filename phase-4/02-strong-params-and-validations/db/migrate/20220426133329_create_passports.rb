class CreatePassports < ActiveRecord::Migration[7.0]
  def change
    create_table :passports do |t|
      t.string :citizen_id
      t.string :country_id

      t.timestamps
    end
  end
end
