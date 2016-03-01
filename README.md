# Entente

#[Live](http://entente.io)

## Minimum Viable Product

Entente is a social media web application inspired by Meetup, built using Ruby on Rails, React.js/Flux, HTML5, CSS3. Entente allows users to:

<!-- This is a Markdown checklist. Use it to keep track of your progress! -->

- [x] Responsive UI design
- [x] Create an account
- [x] Log in / Log out via User Authentication
- [x] Shepherd tour on homepage
- [x] Create, update, read, delete groups and events
- [x] Join/leave groups via join table
- [x] Search groups via React Day Picker interface
- [x] Search groups and events

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

### Phase 2: Flux Architecture, Group CRUD & JSON API (2 day)
* Implement Flux, React Router, React views for groups.
* CRUD functionality for Group.
* Group searching.

[Details][phase-two]

### Phase 3: Events Model, CRUD, & JSON API (2 days)
* Groups contain Events. This day will focus on Event CRUD and views.
* The following day is spent building Event React component and including it in the Flux architecture.
* Incorporate tagging for Groups.
* Event searching.

[Details][phase-three]

### Phase 4: Search and Navigation bar with Welcome Modal (1 day)
* Use React Day Picker to filter groups for events on the given day.
* Nav bar displays Entente logo. Logo on click displays Welcome modal describing site features.
* Nav bar contains links to current user's profile and their groups page.
* Nav bar links to Start Group component, a form to create a new group.

[Details][phase-four]

### Phase 5: In-depth styling & Clarify Route Paths (3 days)
* Build out '/signup' and '/login' pages.
* Add navigation bar to all pages.
* Google fonts.
* Alias necessary routes, such as '/signup', '/login', '/logout'.
* Arrange group/event figures and their figure captions.
* On mouse hover, title descriptions for underlying functionality.

[Details][phase-five]

### Phase 6: Seeding (1 day)
* Create users, groups, events data
* Use Cloudinary for image upload
* Create user-group joins

### Bonus Features (TBD)
- [x] Pop-out modal forms
- [ ] WebGL/Three.js for signup/login pages
- [ ] Notifications for upcoming events
- [ ] Welcome email to new users

[phase-one]: ./docs/phases/phase1.md
[phase-two]: ./docs/phases/phase2.md
[phase-three]: ./docs/phases/phase3.md
[phase-four]: ./docs/phases/phase4.md
[phase-five]: ./docs/phases/phase5.md
