# == Schema Information
#
# Table name: organizers
#
#  id         :integer          not null, primary key
#  user_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Organizer < ActiveRecord::Base
  validates :user_id, presence: true
  has_many :groups
  belongs_to :user
end
