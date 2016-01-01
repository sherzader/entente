var React = require('react');
var UserStore = require('../stores/user');
var ApiUtil = require('../util/apiUtil');

var Profile = React.createClass({
  getInitialState: function () {
    var u = UserStore.findUserById(this.props.params.id) ||
            ApiUtil.fetchUser(this.props.params.id) || {};
    return ({user: u});
  },
  componentDidMount: function () {
    ApiUtil.fetchUser(this.props.params.id);
    this.userListener = UserStore.addListener(this._onChange);
  },
  _onChange: function () {
    this.setState({user: UserStore.findUserById(this.props.params.id)});
  },
  componentWillUnmount: function () {
    this.userListener.remove();
  },
  render: function () {
    var path = "http://res.cloudinary.com/sherzader/image/upload/h_150,w_150,g_face,c_fill,r_max/" + this.state.user.img_url;
    return(
      <div className="user-show">
        <div className="user-pic">
          <dl>
            <dt><h2>Profile</h2></dt><br /><br />
              <img src={path} alt="profile_pic" /><br />
          </dl>
        </div>
        <div className="user-show-info">
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
