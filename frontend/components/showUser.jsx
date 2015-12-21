var React = require('react');
var UserStore = require('../stores/user');
var ApiUtil = require('../util/apiUtil');

var ShowUser = React.createClass({
  getInitialState: function () {
    var u = UserStore.findUserById(window.CURRENT_USER.id)
    || ApiUtil.fetchCurrentUser() || {};
    return ({user: u});
  },
  componentDidMount: function () {
    this.userListener = UserStore.addListener(this._onChange);
  },
  _onChange: function () {
    this.setState({user: UserStore.findUserById(window.CURRENT_USER.id)});
  },
  componentWillUnmount: function () {
    this.userListener.remove();
  },
  render: function () {
    var groups = window.CURRENT_USER.groups.map(function (group) {
      return (<li key={group.id}>{group.title}</li>)
    });
    return(
      <div className="container user-show">
        <h2>My Profile</h2><br /><br />
          {window.CURRENT_USER.name}<br />
          {window.CURRENT_USER.email}<br />
        <h3>My Groups</h3><br /><br />
          {groups}
      </div>
    );
  }
});

module.exports = ShowUser;
