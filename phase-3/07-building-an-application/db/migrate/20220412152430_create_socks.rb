class CreateSocks < ActiveRecord::Migration[7.0]
  def change
    create_table :socks do |t|
      t.string :brand, default: "Fruit of the Loom"
      t.string :type
      t.boolean :is_comfortable?

      t.timestamps
    end
  end
end
