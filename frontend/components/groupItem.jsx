var React = require('react');
var ReactDOM = require('react-dom');
var GroupStore = require('../stores/group');
var UserStore = require('../stores/user');
var ApiUtil = require('../util/apiUtil');

var GroupItem = React.createClass({
  getInitialState: function () {
    return({current_user: UserStore.findUserById(window.CURRENT_USER.id),
            users_groups: GroupStore.allUsersGroups(),
            join_text: "Join"
          });
  },
  componentDidMount: function(){
    this.groupListener = GroupStore.addListener(this._onChange);
    ApiUtil.fetchUser(window.CURRENT_USER.id);
    ApiUtil.fetchUsersGroups();
  },
  componentWillUnmount: function () {
    this.groupListener.remove();
  },
  _onChange: function () {
    var newState = {};
    newState.users_groups = GroupStore.allUsersGroups()

    if(newState.users_groups !== undefined){
      var mssgText = "Join";

      newState.users_groups.forEach(function (user_group) {
        if (user_group.group_id === this.props.group.id){
          var node = ReactDOM.findDOMNode(this.refs.toggle);
          mssgText = "Leave";
        }
      }.bind(this));

      newState.join_text = mssgText;
    }

    this.setState(newState);
  },
  _toggleGroup: function (e) {
    e.preventDefault();
    e.stopPropagation();
    var that = this;
    var node = ReactDOM.findDOMNode(this.refs.toggle);

    if (e.currentTarget.innerHTML === "Join"){
      ApiUtil.createUsersGroup(this.props.group);
    } else {
        var found = this.state.users_groups.find(function (users_group) {
          return (users_group.group_id === this.props.group.id);
        }.bind(this));

        ApiUtil.destroyUsersGroup(found);
    }
  },
  render: function () {
    var memberCount = "";
    if (this.props.group.users){
      if (this.props.group.users.length <= 1){
        memberCount = <dl><dt>1 member</dt></dl>;
      } else{
        memberCount = <dl><dt>{this.props.group.users.length} members</dt></dl>;
      }
    }
    return(
    <div className="group-item"
         key={this.props.group.id}>
         <img className="group-item-img" src={this.props.group.img_url} alt='' />
         <div className="group-caption" onClick={this.props.onClick}><h3>{this.props.group.title}</h3>
         {memberCount}
         <h4><a className="group-item-join" href="#" ref="toggle" onClick={this._toggleGroup}>{this.state.join_text}</a></h4>
       </div>
    </div>
    );
  }
});

module.exports = GroupItem;
