# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
groups = Group.create([{ title: 'Hobbit Gathering',
  location: 'Golden Gate Park', organizer_id: 2,
  body: 'We indulge in Second Breakfast!'},
  {title: 'Surfer Brahs', location: 'Ocean Beach', body: 'Waves, man',
    organizer_id: 2}, {title: 'Top Secret Snowman',
    location: 'North Pole', body: '3 spheres', organizer_id: 2},
  {title: 'Coders', body: 'Hard Coders', location: 'SOMA', organizer_id: 2}])
