class Organizer < ActiveRecord::Base
  validates :user_id, presence: true
  has_many :groups
  belongs_to :user
end
