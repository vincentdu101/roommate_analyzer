class CreateRenters < ActiveRecord::Migration[5.0]
  def change
    create_table :renters do |t|
    	t.integer "user_id"
    	t.integer "room_id"
      t.timestamps
    end
  end
end
