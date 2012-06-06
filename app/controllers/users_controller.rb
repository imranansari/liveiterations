class UsersController < ApplicationController
  before_filter :authenticate_user!

  def show
    @user = User.find(params[:id])

  end

  def list
    respond_to do |format|
      format.json {
        users = User.all.order_by([:created_at, :desc])

        render json: users
      }
    end

  end

end
