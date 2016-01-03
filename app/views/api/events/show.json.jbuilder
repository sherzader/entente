json.extract! @event, :id, :title, :location, :body, :group_id, :img_url
json.date @event.date.strftime("%A, %B %e, %Y")
json.time @event.date.strftime("%l:%M %p")
