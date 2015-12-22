class Group < ActiveRecord::Base
  validates :title, :body, :location, :organizer_id, presence: true
  validates :title, length: { in: 3..100 }

  has_many :events

  belongs_to :organizer
end
