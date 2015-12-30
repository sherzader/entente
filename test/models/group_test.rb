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

require 'test_helper'

class GroupTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
