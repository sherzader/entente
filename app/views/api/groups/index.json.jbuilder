json.array! (@groups) do |group|
  json.extract! group, :id, :title, :location, :body, :users, :event_dates
end
