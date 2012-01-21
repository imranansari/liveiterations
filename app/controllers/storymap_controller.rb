class StorymapController < ApplicationController
  before_filter :authenticate_user!

  def index
  end

  def test
  end

  def display

    puts "epic display"
    @hellos = User.all

    respond_to do |format|
      format.json { render json: @hellos }
    end
  end

  def activity


  end

end
