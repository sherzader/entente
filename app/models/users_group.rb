# == Schema Information
#
# Table name: users_groups
#
#  id         :integer          not null, primary key
#  user_id    :integer
#  group_id   :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class UsersGroup < ActiveRecord::Base
  validates :user_id, :group_id, presence: true
  validates :group_id, uniqueness: {scope: :user_id}

  belongs_to :user
  belongs_to :group



end
