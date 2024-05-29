class UserDestination < ActiveRecord::Migration[7.1]
  def change
    create_table :user_destinations do |t|
      t.integer :user_id, null: false
      t.string :name, null: false
      t.datetime :created_at
      t.datetime :updated_at
    end
  end
end
