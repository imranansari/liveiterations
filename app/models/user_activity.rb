class UserActivity
  include Mongoid::Document
  include Mongoid::Timestamps

  field :id
  field :order
  field :name
  field :desc
end
