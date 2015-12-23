var React = require('react');
var UserStore = require('../stores/user');
var ApiUtil = require('../util/apiUtil');

var UsersGroups = React.createClass({
  getInitialState: function () {
    var u = UserStore.findUserById(window.CURRENT_USER.id) || {};
    return ({user: u});
  },
  componentDidMount: function () {
    ApiUtil.fetchCurrentUser(window.CURRENT_USER.id);

    this.userListener = UserStore.addListener(this._onChange);
  },
  _onChange: function () {
    this.setState({user: UserStore.findUserById(window.CURRENT_USER.id)});
  },
  componentWillUnmount: function () {
    this.userListener.remove();
  },
  render: function () {
    var users_groups;
    if (this.state.user.groups !== undefined){
      console.log(this.state.user.groups);
      users_groups = this.state.user.groups.map(function (group) {
        return(<li key={group.id}>{group.title}</li>)
      });
    }
    return(
      <div className="container user-show">
        <h2>My Groups</h2><br /><br />
        {users_groups}
      </div>
    );
  }
});

module.exports = UsersGroups;
