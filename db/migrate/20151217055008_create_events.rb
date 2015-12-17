class CreateEvents < ActiveRecord::Migration
  def change
    create_table :events do |t|
      t.string :title, null: false
      t.text :body, null: false
      t.integer :user_id, null: false
      t.timestamps null: false
    end

    add_index :events, :user_id
  end
end
