class CreateAddresses < ActiveRecord::Migration[5.0]
  def change
    create_table :addresses do |t|
    t.integer "apt#"
    t.string "street address"
    t.string "city"
    t.string "state"
    t.integer "zip code"
    t.timestamps
    end
  end
end
