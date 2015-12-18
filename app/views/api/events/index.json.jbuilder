json.array! (@events) do |event|
  json.extract! event, :id, :title, :location, :body, :date, :group_id
end
