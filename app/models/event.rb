# == Schema Information
#
# Table name: events
#
#  id           :integer          not null, primary key
#  title        :string           not null
#  body         :text             not null
#  location     :string           not null
#  date         :datetime         not null
#  organizer_id :integer          not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#  img_url      :string
#  group_id     :integer          not null
#

class Event < ActiveRecord::Base
  validates :title, :body, :date, :location, :organizer_id, :group_id, presence: true
  belongs_to :group
  belongs_to :organizer, class_name: 'User', foreign_key: 'organizer_id'
end
