class CreateGroups < ActiveRecord::Migration
  def change
    create_table :groups do |t|
      t.string :title, null: false
      t.text :body, null: false
      t.string :location, null: false
      t.integer :organizer_id, null: false
      t.integer :event_id
      t.integer :user_id
      t.timestamps null: false
    end

    add_index(:groups, :organizer_id)
    add_index(:groups, :event_id)
    add_index(:groups, :user_id)
  end
end
