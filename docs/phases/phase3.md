# Phase 3: Events Model/CRUD/JSON API (2 days)

## Rails
### Models
* Event

### Controllers
* Api::EventsController (create, destroy, index, show, update)

### Views
* events/index.json.jbuilder
* events/show.json.jbuilder

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
* ApiActions.fetchAllEvents -> triggers ApiUtil
* ApiActions.fetchSingleEvent
* ApiActions.createEvent
* ApiActions.editEvent
* ApiActions.destroyEvent

### ApiUtil
* ApiUtil.fetchAllEvents
* ApiUtil.fetchSingleEvent
* ApiUtil.createEvent
* ApiUtil.editEvent
* ApiUtil.destroyEvent

## Gems/Libraries
