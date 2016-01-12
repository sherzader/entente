var React = require('react');
var UserStore = require('../stores/user');
var ApiUtil = require('../util/apiUtil');

var Profile = React.createClass({
  getInitialState: function () {
    var u = UserStore.findUserById(window.CURRENT_USER.id) ||
            ApiUtil.fetchUser(window.CURRENT_USER.id) || {};
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
    var path = "http://res.cloudinary.com/sherzader/image/upload/h_150,w_150,g_face,c_fill,r_max/" + this.state.user.img_url;
    return(
      <div className="profile">
        <div className="profile-pic">
          <dl>
            <dt><h2>My Profile</h2></dt><br /><br />
              <img src={path} alt="profile_pic" /><br />
          </dl>
        </div>
        <div className="profile-caption">
          <dl>
            <dt>{this.state.user.name}</dt><br />
            <dt>{this.state.user.email}</dt><br />
          </dl>
        </div>
      </div>
    );
  }
});

module.exports = Profile;
