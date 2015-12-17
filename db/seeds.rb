# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

150.times do
  user = User.create({
    name: Faker::Name.name,
    email: Faker::Internet.email,
    password: "password",
    group_id: Faker::Number.between(1, 50)
  })
end

50.times do
  organizer = Organizer.create({
    user_id: Faker::Number.between(1, 150)
    })
end

50.times do
  group = Group.create({
    title: Faker::Company.buzzword,
    body: Faker::Company.catch_phrase,
    location: "San Francisco",
    organizer_id: Faker::Number.between(1, 150)
    })
end

50.times do
  event = Event.create({
    title: Faker::Company.buzzword,
    body: Faker::Company.bs,
    location: Faker::Address.street_name,
    date: Faker::Date.forward(10),
    organizer_id: Faker::Number.between(1, 150),
    group_id: Faker::Number.between(1, 50)
    })
end
