class Event < ActiveRecord::Base
  belongs_to :group
  belongs_to :organizer
  
end
