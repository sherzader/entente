var React = require('react');
var ReactDOM = require('react-dom');

var Router = require('react-router').Router;
var Route = require('react-router').Route;
var IndexRoute = require('react-router').IndexRoute;
var IndexGroup = require('./components/indexGroup.jsx');
var Search = require('./components/search.jsx');

var App = React.createClass({
  render: function () {
    return(
      <div>
        <header><h1>Meetup</h1></header>
        {this.props.children}
      </div>
    );
  }
});

var routes = (
  <Router>
    <Route path="/" component={App}>
      <IndexRoute component={IndexGroup}></IndexRoute>
      <Search />
    </Route>
  </Router>
);

document.addEventListener("DOMContentLoaded", function () {
  var root = document.getElementById('root');
  if (root){
    ReactDOM.render(<Router>{routes}</Router>, root);
  }
});
