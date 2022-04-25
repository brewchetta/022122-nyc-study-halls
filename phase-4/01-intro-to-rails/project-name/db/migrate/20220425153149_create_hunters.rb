class CreateHunters < ActiveRecord::Migration[7.0]
  def change
    create_table :hunters do |t|
      t.string :name
      t.string :weapon
      t.integer :season_id

      t.timestamps
    end
  end
end
