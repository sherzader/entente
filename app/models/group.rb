# == Schema Information
#
# Table name: groups
#
#  id           :integer          not null, primary key
#  title        :string           not null
#  body         :text             not null
#  location     :string           not null
#  organizer_id :integer          not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#  img_url      :string
#

class Group < ActiveRecord::Base
  validates :title, :body, :location, :organizer_id, presence: true
  validates :title, length: { in: 3..100 }

  has_many :events
  has_many :users_groups
  has_many :users, through: :users_groups

  belongs_to :organizer, class_name: 'User', foreign_key: 'organizer_id'

  def event_dates
    events.pluck(:date)
  end
end
