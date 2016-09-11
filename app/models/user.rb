class User < ApplicationRecord
	has_many :renters
	has_many :rentees
	has_many :images
end