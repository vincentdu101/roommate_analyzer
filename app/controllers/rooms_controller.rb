class RoomsController < ApplicationController
	def create
		@room = Room.create(:size => params[:size], :availablity_date => params[:availablity_date], :rent => params[:rent])
	end

	def show
		room = Room.find_by_id(params[:room_id]);
		render :json => room
	end

	def index
		render :json => Room.all
	end
end
