var React = require('react');
var ReactDOM = require('react-dom');
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var IndexRoute = require('react-router').IndexRoute;
var GroupIndex = require('./components/groups/groupIndex.jsx');
var GroupForm = require('./components/groups/groupForm.jsx');
var ShowGroup = require('./components/groups/showGroup.jsx');
var EditGroup = require('./components/groups/editGroup.jsx');
var EventForm = require('./components/events/eventForm.jsx');
var EventItem = require('./components/events/eventItem.jsx');
var ShowEvent = require('./components/events/showEvent.jsx');
var EditEvent = require('./components/events/editEvent.jsx');
var UsersGroups = require('./components/users/usersGroup.jsx');
var Profile = require('./components/users/profile.jsx');
var ShowUser = require('./components/users/showUser.jsx');
var Calendar = require('./components/calendar.jsx');
var App = require('./components/app.jsx');

var routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Calendar}></IndexRoute>
    <Route path="profile" component={Profile} />
    <Route path="users/:id" component={ShowUser} />
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
