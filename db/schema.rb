# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20160102213151) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "events", force: :cascade do |t|
    t.string   "title",        null: false
    t.text     "body",         null: false
    t.string   "location",     null: false
    t.datetime "date",         null: false
    t.integer  "organizer_id", null: false
    t.datetime "created_at",   null: false
    t.datetime "updated_at",   null: false
    t.string   "img_url"
    t.integer  "group_id",     null: false
  end

  add_index "events", ["group_id"], name: "index_events_on_group_id", using: :btree
  add_index "events", ["organizer_id"], name: "index_events_on_organizer_id", using: :btree

  create_table "groups", force: :cascade do |t|
    t.string   "title",        null: false
    t.text     "body",         null: false
    t.string   "location",     null: false
    t.integer  "organizer_id", null: false
    t.datetime "created_at",   null: false
    t.datetime "updated_at",   null: false
    t.string   "img_url"
  end

  add_index "groups", ["organizer_id"], name: "index_groups_on_organizer_id", using: :btree

  create_table "users", force: :cascade do |t|
    t.string   "name",            null: false
    t.string   "email",           null: false
    t.string   "password_digest", null: false
    t.string   "session_token",   null: false
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
    t.string   "img_url"
  end

  add_index "users", ["email"], name: "index_users_on_email", unique: true, using: :btree
  add_index "users", ["session_token"], name: "index_users_on_session_token", unique: true, using: :btree

  create_table "users_groups", force: :cascade do |t|
    t.integer  "user_id"
    t.integer  "group_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "users_groups", ["group_id"], name: "index_users_groups_on_group_id", using: :btree
  add_index "users_groups", ["user_id"], name: "index_users_groups_on_user_id", using: :btree

end
