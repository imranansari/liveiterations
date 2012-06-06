class Message
  include Mongoid::Document
  include Mongoid::Timestamps

  field :id
  field :text
  field :projectId

  embeds_many :tags

end
