class RemoveForeignKeysFromUsers < ActiveRecord::Migration
  def change
    remove_column :users, :group_id, :event_id
  end
end
