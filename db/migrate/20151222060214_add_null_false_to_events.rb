class AddNullFalseToEvents < ActiveRecord::Migration
  def change
    remove_index :events, :group_id
    remove_column :events, :group_id
    add_column :events, :group_id, :integer, null: false
    add_index :events, :group_id
  end
end
