class CreateUsersGroups < ActiveRecord::Migration
  def change
    create_table :users_groups do |t|
      t.integer :user_id
      t.integer :group_id
      t.timestamps null: false
    end
    
    add_index :users_groups, :user_id
    add_index :users_groups, :group_id
  end
end
