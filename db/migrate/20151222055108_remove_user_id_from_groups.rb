class RemoveUserIdFromGroups < ActiveRecord::Migration
  def change
    remove_column :users, :group_id
    remove_column :users, :event_id
  end
end
