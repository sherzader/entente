json.extract! @group, :id, :title, :location, :body, :users, :img_url, :events
json.organizer do
  json.id @group.organizer.id
  json.name @group.organizer.name
  json.img_url @group.organizer.img_url
end
json.created_at @group.created_at.strftime("%A, %B %e, %Y")
