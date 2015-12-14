# Hangout

[Heroku link][heroku] **NB:** This should be a link to your production site

[heroku]: http://www.herokuapp.com

## Minimum Viable Product

Hangout is a web application inspired by Meetup built using Ruby on Rails
and React.js. Hangout allows users to:

<!-- This is a Markdown checklist. Use it to keep track of your progress! -->

- [ ] Create an account
- [ ] Log in / Log out
- [ ] Create, read, edit, and delete groups
- [ ] Join groups
- [ ] Organize events within Groups
- [ ] Tag groups with multiple tags and search groups by tag
- [ ] Receive notifications on upcoming events

## Design Docs
* [View Wireframes][view]
* [DB schema][schema]

[view]: ./docs/views.md
[schema]: ./docs/schema.md

## Implementation Timeline

### Phase 1: User Authentication, Group/User Models and JSON API (1 day)
* User signup/login access via BCrypt authentication.
* Build session pages and root React component.
* Root React component houses JSON API for groups.
* If User has previously explored the web application, this root component will contain their groups.

[Details][phase-one]

### Phase 2: Flux Architecture, Group CRUD & JSON API (1 day)
* Implement Flux, React Router, React views for groups.
* CRUD functionality for Group.
* Group searching.

[Details][phase-two]

### Phase 3: Events and Tags Model, CRUD, & JSON API (2 days)
* Groups contain Events. This day will focus on Event CRUD and views.
* The following day is spent building Event React component and including it in the Flux architecture.
* Incorporate tagging for Groups.
* Event searching.

[Details][phase-three]

### Phase 4: Comments (1 day)
* Complete Hangouts features with Comments.
* Comments have create and destroy actions, only.
* Comments take place under an event.
* Build React component for Comments and incorporate into Flux.

[Details][phase-four]

### Phase 5: In-depth styling & Clarify Route Paths (2 days)
* Build out '/signup' and '/login' pages.
* Add navigation bar to all pages.
* Google fonts.
* Alias necessary routes, such as '/signup', '/login', '/logout'.

[Details][phase-five]

### Phase 6: Notifications and Seeding (1 day)
* Notify user on upcoming events.
* Notify user after joining group/event.

### Bonus Features (TBD)
- [ ] WebGL/Three.js for signup/login pages
- [ ] Pop-out forms.
- [ ] Pagination / infinite scroll for Groups/Events Index

[phase-one]: ./docs/phases/phase1.md
[phase-two]: ./docs/phases/phase2.md
[phase-three]: ./docs/phases/phase3.md
[phase-four]: ./docs/phases/phase4.md
[phase-five]: ./docs/phases/phase5.md
