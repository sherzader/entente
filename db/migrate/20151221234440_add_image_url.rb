class AddImageUrl < ActiveRecord::Migration
  def change
    add_column :users, :img_url, :string
    add_column :groups, :img_url, :string
  end
end
