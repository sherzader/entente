class RemoveUserIdAddGroupId < ActiveRecord::Migration
  def change
    remove_column :groups, :user_id
    remove_column :groups, :event_id
    remove_column :events, :user_id
    add_column :events, :group_id
    add_index :events, :group_id
    add_index :users, :group_id
    add_index :users, :event_id
  end
end
