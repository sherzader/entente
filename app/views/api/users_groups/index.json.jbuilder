json.array! @users_groups do |users_group|
  json.extract! users_group, :id, :user_id, :group_id
end
