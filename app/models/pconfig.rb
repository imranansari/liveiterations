class Pconfig
  include Mongoid::Document
  include Mongoid::Timestamps

  field :id
  field :storyCount, type: Integer, default: 0

  embedded_in :project
end