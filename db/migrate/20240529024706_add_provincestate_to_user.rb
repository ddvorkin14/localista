class AddProvincestateToUser < ActiveRecord::Migration[7.1]
  def change
    add_column :users, :provincestate, :string
  end
end
