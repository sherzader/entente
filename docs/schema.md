# Schema Information

## groups
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
title       | string    | not null
body        | text      | not null
location    | text      | not null
organizer_id| integer   | not null, foreign key (references organizers), indexed
img_url     | string    | null

## events
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
group_id    | integer   | not null, foreign key (references groups), indexed
organizer_id| integer   | not null, foreign key (references organizers), indexed
title       | string    | not null
location    | text      | not null
date        | datetime  | not null
body        | string    | not null
img_url     | string    | null

## users_groups
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
group_id    | integer   | not null, foreign key (references group), indexed, unique [tag_id]
user_id     | integer   | not null, foreign key (references user), indexed

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
name            | string    | not null
email           | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique
img_url         | string    | null
