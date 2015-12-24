var React = require('react');
var ReactDOM = require('react-dom');

var Router = require('react-router').Router;
var Route = require('react-router').Route;
var IndexRoute = require('react-router').IndexRoute;
var Search = require('./components/search.jsx');
var GroupIndex = require('./components/groupIndex.jsx');
var GroupForm = require('./components/groupForm.jsx');
var ShowGroup = require('./components/showGroup.jsx');
var EventForm = require('./components/eventForm.jsx');
var EventItem = require('./components/eventItem.jsx');
var ShowEvent = require('./components/showEvent.jsx');
var ShowUser = require('./components/showUser.jsx');
var EditEvent = require('./components/editEvent.jsx');
var EditGroup = require('./components/editGroup.jsx');
var UsersGroups = require('./components/usersGroup.jsx');
var Calendar = require('./components/calendar.jsx');
var App = require('./components/app.jsx');

var routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Calendar}></IndexRoute>
    <Route path="profile" component={ShowUser} />
    <Route path="myGroups" component={UsersGroups} />
    <Route path="groups/new" component={GroupForm} />
    <Route path="groups/:id" component={ShowGroup}></Route>
    <Route path="groups/:id/edit" component={EditGroup}></Route>
    <Route path="groups/:id/events/new" component={EventForm} />
    <Route path="events/:id" component={ShowEvent} />
    <Route path="events/:id/edit" component={EditEvent} />
  </Route>
);

document.addEventListener("DOMContentLoaded", function () {
  var root = document.getElementById('root');
  if (root){
    ReactDOM.render(<Router>{routes}</Router>, root);
  }
});
