class MyConfig
  include Mongoid::Document
  include Mongoid::Timestamps

  field :id
  field :storyCount, type: Numeric, default: 0

  embedded_in :project
end