class CreateWabbits < ActiveRecord::Migration[7.0]
  def change
    create_table :wabbits do |t|
      t.string :name
      t.integer :number_of_carrots

      t.timestamps
    end
  end
end
