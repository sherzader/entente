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

require 'test_helper'

class EventTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
