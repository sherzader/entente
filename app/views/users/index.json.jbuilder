json.array! @users do |user|
  json.extract! user, :id, :name, :email, user.created_at.strftime("%B %e, %Y")
end
