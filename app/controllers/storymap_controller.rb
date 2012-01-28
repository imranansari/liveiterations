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
    @userActivities = UserActivity.all.order_by([:created_at, :asc])

    respond_to do |format|
      format.json { render json: @userActivities }
    end

  end


  def newActivity
    respond_to do |format|
      format.json {
        activity = JSON.parse(request.body.read)
        newActivity = UserActivity.create(activity)
=begin
        newActivity.storyTasks.build(name: "Task1")
        newActivity.storyTasks.build(name: "Task2")
=end
        newActivity.save
        newActivity.to_json
        render json: newActivity
      }
    end
  end

  def updateActivity
    respond_to do |format|
      format.json {
        activity = JSON.parse(request.body.read)
        puts activity
        updateActivity = UserActivity.where(:_id => activity["_id"]).first

        updateActivity.name = activity["name"]
        updateActivity.storyTasks = activity["storyTasks"]

        updateActivity.save
        render json: activity
      }
    end
  end


  def updateTask
    respond_to do |format|
      format.json {
        task = JSON.parse(request.body.read)

        activity = UserActivity.where("storyTasks._id" => BSON.ObjectId(task["_id"])).first
        #puts "activityJson: " + activity.to_json

        updateTask = activity.storyTasks.find(task["_id"])
        #puts "taskJson : " + updateTask.to_json

        updateTask.name = task["name"]
        updateTask.desc = task["desc"]
        updateTask.save

        render json: updateTask
      }
    end
  end

end
