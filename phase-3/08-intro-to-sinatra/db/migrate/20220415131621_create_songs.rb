class CreateSongs < ActiveRecord::Migration[6.1]
  def change
    create_table :songs do |t|
      t.string :title
      t.integer :playtime_in_seconds
      t.integer :album_id

      t.timestamps
    end
  end
end
