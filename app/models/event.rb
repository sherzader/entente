class Event < ActiveRecord::Base
  validates :title, :body, :date, :location, :organizer_id, :group_id, presence: true
  belongs_to :group
  belongs_to :organizer
end
