class Message
  include Mongoid::Document
  include Mongoid::Timestamps

  field :id
  field :text

  embeds_many :tags

end
