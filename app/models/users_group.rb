class UsersGroup < ActiveRecord::Base
  validates :user_id, :group_id, presence: true

  belongs_to :user
  belongs_to :group

end
