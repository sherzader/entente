class CreateBetterEvents < ActiveRecord::Migration
  def change
    drop_table :events
    create_table :events do |t|
      t.string :title, null: false
      t.text :body, null: false
      t.string :location, null: false
      t.datetime :date, null: false
      t.integer :organizer_id, null: false
      t.integer :user_id
      t.timestamps null: false
    end

    add_index :events, :user_id
    add_index :events, :organizer_id
  end
end
