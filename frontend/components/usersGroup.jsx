var React = require('react');
var UserStore = require('../stores/user');
var ApiUtil = require('../util/apiUtil');
var History = require('react-router').History;
var Link = require('react-router').Link;

var UsersGroups = React.createClass({
  mixins: [History],
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
        var path = "groups/" + group.id;
        return(<div className="group-item" key={group.id}>
             <img className="group-item-img" src={group.img_url} alt='' />
             <div className="group-caption"><Link to={path}><h3>{group.title}</h3></Link>
             </div></div>);
      });
    }
    return(
      <div className="usersgroups-show">
        <h2>My Groups</h2><br /><br />
        {users_groups}
      </div>
    );
  }
});

module.exports = UsersGroups;
