var React = require('react');
var ReactDOM = require('react-dom');
var GroupStore = require('../../stores/group');
var UserStore = require('../../stores/user');
var ApiUtil = require('../../util/apiUtil');
var Link = require('react-router').Link;

var GroupItem = React.createClass({
  getInitialState: function () {
    return({
            current_user: UserStore.findUserById(window.CURRENT_USER.id),
            users_groups: GroupStore.allUsersGroups(),
            join: false,
            hover: false
          });
  },
  componentDidMount: function (){
    this.groupListener = GroupStore.addListener(this._onChange);
    ApiUtil.fetchUser(window.CURRENT_USER.id);
    ApiUtil.fetchUsersGroups();
  },
  componentWillUnmount: function () {
    this.groupListener.remove();
  },
  _onChange: function () {
    var newState = {};
    var mssgText;
    var node;
    newState.users_groups = GroupStore.allUsersGroups();

    if (newState.users_groups !== undefined){
      mssgText = true;

      newState.users_groups.forEach(function (user_group) {
        if (user_group.group_id === this.props.group.id) {
          node = ReactDOM.findDOMNode(this.refs.toggle);
          mssgText = false;
        }
      }.bind(this));

      newState.join = mssgText;
    }

    this.setState(newState);
  },
  _toggleGroup: function (e) {
    e.preventDefault();
    e.stopPropagation();
    var that = this;
    var node = ReactDOM.findDOMNode(this.refs.toggle);
    var found;

    if (e.currentTarget.getAttribute('value') === 'Join'){
      ApiUtil.createUsersGroup(this.props.group);
    } else {
        found = this.state.users_groups.find(function (users_group) {
          return (users_group.group_id === this.props.group.id);
        }.bind(this));

        ApiUtil.destroyUsersGroup(found);
    }
  },
  _showDetails: function () {
    this.setState({ hover: true });
  },
  _hideDetails: function () {
    this.setState({ hover: false });
  },
  _addHoverClass: function () {
    return (
      this.state.hover ? "hover-opts" : "hidden"
    );
  },
  _whichToggleClass: function () {
    return (
      this.state.join ? "glyphicon glyphicon-plus" : "glyphicon glyphicon-minus"
    );
  },
  _addJoinValue: function () {
    return (
      this.state.join ? "join" : "leave"
    );
  },
  _showGroupPage: function () {
    this.history.pushState(null, "/groups/" + this.props.group.id);
  },
  render: function () {
    if (this.props.group) {
      var url = "/groups/" + this.props.group.id;
      var group_img = "http://res.cloudinary.com/sherzader/image/upload/c_scale,w_350/" + this.props.group.img_url;
    }
    var memberCount = "";
    if (this.props.group.users){
      if (this.props.group.users.length <= 1){
        memberCount = <dl><dt>1 member</dt></dl>;
      } else{
        memberCount = <h4>{this.props.group.users.length} members</h4>;
      }
    }
    return(
      <div className="group-item"
         key={this.props.group.id}
         onMouseEnter={this._showDetails}
         onMouseLeave={this._hideDetails}>
         <img className="group-item-img" src={group_img} alt='' />
         <div className="group-caption">
           <h3>{this.props.group.title}</h3>
           <h2>{memberCount}</h2>
           <h4>
           <span className={this._addHoverClass()}>
             <a href="#"
               title="Join/Leave"
               ref="toggle"
               value={this._addJoinValue()}
               onClick={this._toggleGroup}>
               <span className={this._whichToggleClass()} />
             </a>
             <Link to={url}>
               <span title="See more" className="glyphicon glyphicon-share-alt" />
             </Link>
          </span>
           </h4>
        </div>
      </div>
    );
  }
});

module.exports = GroupItem;
