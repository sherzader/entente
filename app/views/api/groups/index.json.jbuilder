json.array! (@groups) do |group|
  json.extract! group, :id, :title, :img_url, :location, :body, :users, :event_dates
end
