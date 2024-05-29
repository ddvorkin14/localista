class AddTypeFieldToInterest < ActiveRecord::Migration[7.1]
  def change
    add_column :interests, :kind, :string
  end
end
