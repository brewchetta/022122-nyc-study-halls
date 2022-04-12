class SockDrawers < ActiveRecord::Migration[7.0]
  def change
    create_table :sock_drawers do |t|
      t.string :owner
      t.string :size

      t.timestamps
    end
  end
end
