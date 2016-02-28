var React = require('react');
var UserStore = require('../../stores/user');
var ApiUtil = require('../../util/apiUtil');
var Link = require('react-router').Link;

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
    var name = this.state.user.name + "'s";
    if (this.state.user.groups !== undefined){
      var groups = this.state.user.groups.map(function (group) {
        var group_img = "http://res.cloudinary.com/sherzader/image/upload/c_scale,w_250/" + group.img_url;
        var path = "groups/" + group.id;
        return (<div className="group-item" title="Click group title for more info" key={group.id}>
             <img className="group-item-img" src={group_img} alt='' />
             <Link to={path}><div className="group-caption"><h3>{group.title}</h3></div></Link>
             </div>)
      });
    }
    return(
      <div className="user-show">
        <div className="user-show-info">
          <div className="user-pic">
            <dl>
              <dt><h3>Profile</h3></dt><br /><br />
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
          <dl><dt><div className="user-groups-caption">{name} Groups</div></dt></dl>
          {groups}
        </div>
      </div>
    );
  }
});

module.exports = Profile;
