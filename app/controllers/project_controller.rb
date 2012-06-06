class ProjectController < ApplicationController
  before_filter :authenticate_user!

  def index
    render :layout => false
  end

  def profile
    puts "projectId :" + session[:currentProjectId]

    @project = Project.find(session[:currentProjectId])

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
        projects = Project.all.order_by([:created_at,:desc])

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

  def savesession
    respond_to do |format|
      format.json{
        project = JSON.parse(params[:payload])
        #puts project
        #puts project["name"]
        session[:currentProjectId] = project["id"]
        session[:currentProjectName] = project["name"]
        render json: params[:payload]
      }
    end
  end

end
