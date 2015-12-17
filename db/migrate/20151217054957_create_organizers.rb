class CreateOrganizers < ActiveRecord::Migration
  def change
    create_table :organizers do |t|
      t.integer :user_id, null: false
      t.timestamps null: false
    end

    add_index(:organizers, :user_id)
  end
end
