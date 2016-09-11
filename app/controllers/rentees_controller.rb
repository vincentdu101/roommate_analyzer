class RenteesController < ApplicationController
  def create
  	rentee = Rentee.create(:user_id => params["user_id"], :room_id => params["room_id"])
  end

  def read
  	render :json => Rentee.find_by_id(params["rentee_id"])
  end

  def index
  	render :json => Rentee.all
  end

  def delete
  	
  end
end
