var React = require('react');
var UserStore = require('../stores/user');
var ApiUtil = require('../util/apiUtil');

var UsersGroups = React.createClass({
  getInitialState: function () {
    var u = UserStore.findUserById(window.CURRENT_USER.id) || {};
    return ({user: u});
  },
  componentDidMount: function () {
    ApiUtil.fetchUser(window.CURRENT_USER.id);

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
      users_groups = this.state.user.groups.map(function (group) {
        return(<div className="group-item"
             key={group.id}>
             <img className="group-item-img" src={this.props.group.img_url} alt='' />
             <div className="group-caption" onClick={this.props.onClick}><h3>{this.props.group.title}</h3>
             <dl><dt>{this.props.group.users.length + 1} members</dt></dl>
             </div></div>);
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
