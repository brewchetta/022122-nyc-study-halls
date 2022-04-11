class CreatePatients < ActiveRecord::Migration[7.0]
  def change
    create_table :patients do |t|
      t.string :name
      t.integer :age
      t.string :chronic_ailments
      t.timestamps
    end
  end
end
