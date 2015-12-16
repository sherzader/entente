var React = require('react');
var ReactDOM = require('react-dom');

var Router = require('react-router').Router;
var Route = require('react-router').Route;
var IndexRoute = require('react-router').IndexRoute;
var Search = require('./components/search.jsx');
var GroupIndex = require('./components/groupIndex.jsx');

var App = React.createClass({
  render: function () {
    return(
      <div>
        {this.props.children}
      </div>
    );
  }
});

var routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Search}></IndexRoute>
  </Route>
);

document.addEventListener("DOMContentLoaded", function () {
  var root = document.getElementById('root');
  if (root){
    ReactDOM.render(<Router>{routes}</Router>, root);
  }
});
