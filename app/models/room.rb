class Room < ApplicationRecord
	has_and_belongs_to_many :rentees
	has_and_belongs_to_many :renters
	has_one :address
	has_many :images	
end
