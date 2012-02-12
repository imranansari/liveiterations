class MessageController < ApplicationController

  def index
    render :layout => false
  end


  def new
    respond_to do |format|
      format.json {
        message = JSON.parse(request.body.read)
        newMessage = Message.create(message)
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
    @messages = Message.all.order_by([:created_at, :asc])

    respond_to do |format|
      format.json { render json: @messages }
    end
  end

end
