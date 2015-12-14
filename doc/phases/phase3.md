# Phase 3: Events and Tags Model/CRUD/JSON API (2 days)

## Rails
### Models
* Event
* Tag
* Tagging

### Controllers
* Api::EventsController (create, destroy, index, show, update)

### Views
* events/index.json.jbuilder
* events/show.json.jbuilder
* users/index.json.jbuilder
* users/show.json.jbuilder
* tags/show.json.jbuilder

## Flux
### Views (React Components)
* EventsIndex
  - EventIndexItem
* EventForm

### Stores
* Event

### Actions
* ApiActions.receiveAllEvents -> triggered by ApiUtil
* ApiActions.receiveSingleEvent
* ApiActions.deleteEvent
* EventActions.fetchAllEvents -> triggers ApiUtil
* EventActions.fetchSingleEvent
* EventActions.createEvent
* EventActions.editEvent
* EventActions.destroyEvent

### ApiUtil
* ApiUtil.fetchAllEvents
* ApiUtil.fetchSingleEvent
* ApiUtil.createEvent
* ApiUtil.editEvent
* ApiUtil.destroyEvent

## Gems/Libraries
