class Group < ActiveRecord::Base
  validates :title, :body, :location, :organizer_id, presence: true
  validates :title, length: { in: 3..100 }

  has_many :events
  has_many :users_groups
  has_many :users, through: :users_groups

  belongs_to :organizer
end
