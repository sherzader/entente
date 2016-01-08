# Phase 2: Flux Architecture and Group CRUD (1 day)

## Rails
### Models
### Controllers
### Views
## Flux

### Views (React Components)
* GroupsIndex
  - GroupsIndexItem
* GroupForm

### Stores
* Group

### Actions
* ApiActions.receiveAllGroups -> triggered by ApiUtil
* ApiActions.receiveSingleGroup
* ApiActions.deleteGroup
* GroupActions.fetchAllGroups -> triggers ApiUtil
* GroupActions.fetchSingleGroup
* GroupActions.createGroup
* GroupActions.editGroup
* GroupActions.destroyGroup

### ApiUtil
* ApiUtil.fetchAllGroups
* ApiUtil.fetchSingleGroup
* ApiUtil.createGroup
* ApiUtil.editGroup
* ApiUtil.destroyGroup

## Gems/Libraries
* Flux Dispatcher (npm)
