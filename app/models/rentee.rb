class Rentee < ApplicationRecord
	has_and_belongs_to_many_belongs_to_many :rooms
	belongs_to :user 
end
