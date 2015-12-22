var React = require('react');
var UserStore = require('../stores/user');
var ApiUtil = require('../util/apiUtil');

var ShowUser = React.createClass({
  getInitialState: function () {
    var u = UserStore.findUserById(window.CURRENT_USER.id) || {};
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
          <img src={this.state.user.img_url} alt="profile_pic" />
          <br />{this.state.name}<br />
          {this.state.email}<br />
        <h3>My Groups</h3><br /><br />
        {this.state.groups}
      </div>
    );
  }
});

module.exports = ShowUser;
