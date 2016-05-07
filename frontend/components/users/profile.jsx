var React = require('react');
var UserStore = require('../../stores/user');
var ApiUtil = require('../../util/apiUtil');
var History = require('react-router').History;
var Link = require('react-router').Link;

var UsersGroups = React.createClass({
  mixins: [History],
  getInitialState: function () {
    var u = UserStore.findUserById(window.CURRENT_USER.id) ||
            ApiUtil.fetchUser(window.CURRENT_USER.id) || {};
    return ({ user: u});
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
    var path = "http://res.cloudinary.com/sherzader/image/upload/h_150,w_150,g_face,c_fill,r_max/" + this.state.user.img_url;
    var users_groups;
    if (this.state.user.groups !== undefined){
      users_groups = this.state.user.groups.map(function (group) {
        var path = "groups/" + group.id;
        var group_img = "http://res.cloudinary.com/sherzader/image/upload/c_scale,w_250/" + group.img_url;
        return(<div className="group-item" title="Click group title for more info" key={group.id}>
             <img className="group-item-img" src={group_img} alt='' />
             <Link to={path}><div className="group-caption"><dl><dt><h3>{group.title}</h3></dt></dl></div></Link>
             </div>);
      });
    }
    return(
      <div className="row">
        <div className="user-show-info">
          <div className="user-pic">
            <dl>
              <dt><h3>My Profile</h3></dt><br /><br />
                <img src={path} alt="profile_pic" /><br />
            </dl>
          </div>
          <div className="user-caption">
            <dl>
              <dt>{this.state.user.name}</dt><br />
              <dt>{this.state.user.email}</dt><br />
            </dl>
          </div>
        </div>
        <div className="user-groups">
          <dl><dt><span className="user-groups-caption">My Groups</span></dt></dl>
          {users_groups}
        </div>
      </div>
    );
  }
});

module.exports = UsersGroups;
