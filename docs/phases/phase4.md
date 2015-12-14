# Phase 4: Comments (1 day)

## Rails
### Models
* Comment

### Controllers
* Api::CommentsController (create, destroy, index)

### Views
* comments/index.json.jbuilder
* comments/show.json.jbuilder

## Flux
### Views (React Components)
* CommentsIndex
  - CommentIndexItem
* CommentForm

### Stores
* Comment

### Actions
* ApiActions.receiveAllComments -> triggered by ApiUtil
* ApiActions.deleteComment
* EventActions.fetchAllComments -> triggers ApiUtil
* EventActions.createComment
* EventActions.destroyComment

### ApiUtil
* ApiUtil.fetchAllComment
* ApiUtil.createComment
* ApiUtil.destroyComment

## Gems/Libraries
* react-quill (npm)
