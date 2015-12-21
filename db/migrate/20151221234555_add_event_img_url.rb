class AddEventImgUrl < ActiveRecord::Migration
  def change
    add_column :events, :img_url, :string
  end
end
