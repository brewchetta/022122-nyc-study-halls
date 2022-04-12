class ChangeTypeToSockType < ActiveRecord::Migration[7.0]
  def change
    remove_column :socks, :type
    add_column :socks, :sock_type, :string
  end
end
