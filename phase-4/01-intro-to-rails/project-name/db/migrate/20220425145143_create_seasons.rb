class CreateSeasons < ActiveRecord::Migration[7.0]
  def change
    create_table :seasons do |t|
      t.string :game
      t.string :name
      t.boolean :is_current?

      t.timestamps
    end
  end
end
