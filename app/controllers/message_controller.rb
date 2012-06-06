class MessageController < ApplicationController

  before_filter :authenticate_user!

  def index
    render :layout => false
  end


  def new
    respond_to do |format|
      format.json {
        message = JSON.parse(request.body.read)
        newMessage = Message.create(message)
        #newMessage.userId = current_user.id
=begin
        newActivity.storyTasks.build(name: "Task1")
        newActivity.storyTasks.build(name: "Task2")
=end
        #newMessage.tags = message["tags"]
        newMessage.save
        newMessage.to_json
        render json: newMessage
      }
    end
  end


  def list
    puts "get message api"
    puts params["projectId"]

    #@userActivities = UserActivity.where(projectId: params["projectId"]).all.order_by([:boardOrder, :asc])

    #@messages = Message.all.order_by([:created_at, :asc])
    @messages = Message.where(projectId: params["projectId"]).all.order_by([:created_at, :asc])



    respond_to do |format|
      format.json { render json: @messages }
    end
  end

end
