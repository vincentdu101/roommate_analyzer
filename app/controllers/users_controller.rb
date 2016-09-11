class UsersController < ApplicationController
  def create
    render :json => request.params
     @user = User.new({:first_name => params[:first_name], :last_name => params[:last_name],\
     :age => params[:age], :gender => params[:gender] })
     @user.save
  end

  def delete
  end

  def index
    render :json => User.all
  end

  def update
  end

  def show
    render :json => User.find_by_id(params[:user_id])
  end
end
  