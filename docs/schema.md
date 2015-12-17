# Schema Information

## groups
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
title       | string    | not null
body        | text      | not null
location    | text      | not null
organizer_id| integer   | not null, foreign key (references organizers), indexed

## events
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
group_id    | integer   | not null, foreign key (references groups),
indexed
organizer_id| integer   | not null, foreign key (references organizers), indexed
title       | string    | not null
location    | text      | not null
date        | datetime  | not null
description | string    |

## tags
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
name        | string    | not null

## taggings
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
name        | string    | not null
group_id    | integer   | not null, foreign key (references notes), indexed, unique [tag_id]
tag_id      | integer   | not null, foreign key (references tags), indexed

## organizers
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer   | not null, foreign key (references users), indexed

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
name            | string    | not null
email           | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique
group_id        | integer   | not null, foreign key (references groups), indexed
event_id        | integer   | not null, foreign key (references events), indexed
