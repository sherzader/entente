class DropOrganizers < ActiveRecord::Migration
  def change
    drop_table :organizers
  end
end
