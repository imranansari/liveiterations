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
    puts "activities display"
    @userActivities = UserActivity.all

    respond_to do |format|
      format.json { render json: @userActivities }
    end

  end


  def newActivity
    respond_to do |format|
      format.json {
        activity = JSON.parse(request.body.read)
        newActivity = UserActivity.create(activity)
        newActivity.storyTasks.build(name: "Task1")
        newActivity.storyTasks.build(name: "Task2")
        newActivity.save
        newActivity.to_json
        render json: newActivity
      }
    end
  end

end
