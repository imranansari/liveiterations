class SpController < ApplicationController

  def index
    render :layout => false
  end

  def components
    render :layout => false
  end

  def list
    respond_to do |format|
      format.json {
        projects = Project.all.order_by([:created_at,:desc])

        render json: projects
      }
    end

  end

end
