class CreateRooms < ActiveRecord::Migration[5.0]
  def change
    create_table :rooms do |t|
    t.integer "size"
    t.date "availablity_date"
    t.integer "rent"
    t.timestamps
    end
  end
end
