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
        var group_img = "http://res.cloudinary.com/sherzader/image/upload/c_scale,w_250/" + group.img_url;
        return(<div className="group-item" title="Click group title for more info" key={group.id}>
             <img className="group-item-img" src={group_img} alt='' />
             <div className="group-caption"><Link to={path}><h3>{group.title}</h3></Link>
             </div></div>);
      });
    }
    return(
      <div className="usersgroups-show">
        <dt><h3>My Groups</h3></dt><br /><br />
        {users_groups}
      </div>
    );
  }
});

module.exports = UsersGroups;
