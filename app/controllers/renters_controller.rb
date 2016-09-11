class RentersController < ApplicationController
  def read
  	render :json => Renter.find_by_id(params["renter_id"])
  end

  def delete
  	render :json => Renter.find_by_id(params["renter_id"]).delete
  end

  def index
  	#render :json => "index"
  	render :json => Renter.all
  end

  def create
  	Renter.create(:user_id => params["user_id"], :room_id => params["user_id"])
  	render :json => "Renter Create"
  end

  def update
  end

  def get_rooms
  	render :json => Renter.rooms.all
  end
end
