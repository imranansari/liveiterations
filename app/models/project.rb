class Project
  include Mongoid::Document
  include Mongoid::Timestamps

  field :id
  field :name
  field :desc

end
