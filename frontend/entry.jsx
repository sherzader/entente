var React = require('react');
var ReactDOM = require('react-dom');

var Router = require('react-router').Router;
var Route = require('react-router').Route;
var IndexRoute = require('react-router').IndexRoute;
var Group = require('./component/group.jsx');

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
      <IndexRoute component={Group}></IndexRoute>
      // <Route path="groups" component={BenchForm} />
      // <Route path="benches/:benchId" component={Show} />
    </Route>
  </Router>
);

document.addEventListener("DOMContentLoaded", function () {
  var root = document.getElementById('root');
  ReactDOM.render(<Router>{routes}</Router>, root);
});
