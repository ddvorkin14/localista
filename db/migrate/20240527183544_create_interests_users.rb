class CreateInterestsUsers < ActiveRecord::Migration[7.1]
  def change
    create_table :interests_users do |t|
      t.integer :interest_id
      t.integer :user_id

      t.timestamps
    end
  end
end
