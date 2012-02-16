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

    puts params["projectId"]

    @userActivities = UserActivity.where(projectId: params["projectId"]).all.order_by([:boardOrder, :asc])

    respond_to do |format|
      format.json { render json: @userActivities }
    end

  end


  def newActivity
    respond_to do |format|
      format.json {
        #puts params["projectId"]

        activity = JSON.parse(request.body.read)
        puts activity

        newActivity = UserActivity.create(activity)
        #newActivity.projectId = params["projectId"]
        project = Project.where(:_id => newActivity["projectId"]).first
        newActivity.boardOrder = project.pconfig.inc(:storyCount, 1)
        puts newActivity.boardOrder
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

  def deleteActivity
    respond_to do |format|
      format.json {

        deleteActivity = UserActivity.where(:_id => params["id"]).first

        deleteActivity.destroy
        render json: deleteActivity
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

  def deleteTask
    puts "delete task"
    respond_to do |format|
      format.json {
        #task = JSON.parse(request.body.read)

        activity = UserActivity.where("storyTasks._id" => BSON.ObjectId(params["id"])).first
        #puts "activityJson: " + activity.to_json

        deleteTask = activity.storyTasks.find(params["id"])

        deleteTask.destroy

        render json: deleteTask
      }
    end
  end

end
