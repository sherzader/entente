var React = require('react');
var ApiUtil = require('../../util/apiUtil');

var Member = React.createClass({
  getInitialState: function () {
    return(members: )
  },
  render: function () {
    var member_pics = this.state.members.map(function (user) {
      var path = "http://res.cloudinary.com/demo/image/upload/w_100,h_100/" + user.img_url;
      return(<img src={path} alt="member_pic">{user.name}</img>)
    })

    return(
      <div className="members">
        {member_pics}
      </div>
    )
  }
});

module.exports = Member;
