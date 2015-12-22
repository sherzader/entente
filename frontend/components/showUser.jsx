var React = require('react');
var UserStore = require('../stores/user');
var ApiUtil = require('../util/apiUtil');

var ShowUser = React.createClass({
  getInitialState: function () {
    var u = UserStore.findUserById(window.CURRENT_USER.id) ||
            ApiUtil.fetchCurrentUser() || {};
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
    return(
      <div className="container user-show">
        <h2>My Profile</h2><br /><br />
          <img src={window.CURRENT_USER.img_url} alt="profile_pic" />
          <br />{window.CURRENT_USER.name}<br />
          {window.CURRENT_USER.email}<br />
          {window.CURRENT_USER.created_at}<br />
        <h3>My Groups</h3><br /><br />
      </div>
    );
  }
});

module.exports = ShowUser;
