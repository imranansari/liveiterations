class UserActivity
  include Mongoid::Document
  include Mongoid::Timestamps

  field :id
  field :order
  field :name
  field :desc
  field :projectId
  field :boardOrder, type: Integer

  field :modifiedBy

  embeds_many :storyTasks

  def getStoryTaskById(id)
    return storyTasks.find(id)
  end
end
