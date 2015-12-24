class UsersGroup < ActiveRecord::Base
  validates :user_id, :group_id, presence: true
  validates :group_id, uniqueness: {scope: :user_id}

  belongs_to :user
  belongs_to :group



end
