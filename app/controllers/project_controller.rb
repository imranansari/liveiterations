class ProjectController < ApplicationController

  def index
    render :layout => false
  end

  def new
    respond_to do |format|
      format.json {
        project = JSON.parse(request.body.read)
        newProject = Project.create(project)

        #newProject.name = "Test Project"
        newProject.pconfig = Pconfig.new
        #newProject.pconfig.inc(:storyCount, 1)

        newProject.save
        render json: newProject
      }
    end
  end

  def list
    respond_to do |format|
      format.json {
        projects = Project.all.order_by([:created_at,:asc])

        render json: projects
      }
    end

  end

  def update
    respond_to do |format|
          format.json {
            project = JSON.parse(request.body.read)
            puts project
            updateProject = Project.where(:_id => project["_id"]).first

            updateProject.name = project["name"]
            updateProject.desc = project["desc"]

            updateProject.save
            render json: updateProject
          }
        end
  end

  def delete
    respond_to do |format|
      format.json {

        deleteProject = Project.where(:_id => params["id"]).first

        deleteProject.destroy
        render json: deleteProject
      }
    end
  end

end
