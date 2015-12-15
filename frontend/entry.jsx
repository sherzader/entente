var React = require('react');
var ReactDOM = require('react-dom');

var Router = require('react-router').Router;
var Route = require('react-router').Route;
var IndexRoute = require('react-router').IndexRoute;

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

// <IndexRoute component={Group}></IndexRoute>
// <Route path="groups" component={BenchForm} />

var routes = (
  <Router>
    <Route path="/" component={App}>
    </Route>
  </Router>
);

// <Router>{routes}</Router>

document.addEventListener("DOMContentLoaded", function () {
  var root = document.getElementById('root');
  if (root){
    ReactDOM.render(<App />, root);
  }
});
