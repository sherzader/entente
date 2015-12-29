json.organizer do
  json.id @organizer.id
  json.name @organizer.name
  json.img_url @organizer.img_url
end
json.extract! @group, :id, :title, :location, :body, :users, :img_url, :events, :organizer
