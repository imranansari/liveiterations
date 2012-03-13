class Project
  include Mongoid::Document
  include Mongoid::Timestamps

  field :id
  field :name
  field :desc

  field :status

  embeds_one :pconfig
end
