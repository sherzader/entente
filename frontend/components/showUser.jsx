var React = require('react');
var UserStore = require('../stores/user');
var ApiUtil = require('../util/apiUtil');

var ShowUser = React.createClass({
  getInitialState: function () {
    var user = ApiUtil.fetchCurrentUser() || {};
    return ({user: user});
  },
  componentDidMount: function () {
    this.userListener = UserStore.addListener(this._onChange);
  },
  _onChange: function () {
    this.setState({user: UserStore.getUser()});
  },
  componentWillUnmount: function () {
    this.userListener.remove();
  },
  render: function () {
    return(
      <div className="container user-show">Made it</div>
    );
  }
});

module.exports = ShowUser;
