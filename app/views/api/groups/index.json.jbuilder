json.array! (@groups) do |group|
  json.extract! group, :id, :title, :body
end
