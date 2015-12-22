var React = require('react');
var ReactDOM = require('react-dom');
var GroupStore = require('../stores/group');
var UserStore = require('../stores/user');
var ApiUtil = require('../util/apiUtil');
var Search = require('./search.jsx');

var GroupItem = React.createClass({
  getInitialState: function () {
    return({users_group: UserStore.findUserById(window.CURRENT_USER.id)});
  },
  componentDidMount: function(){
    this.groupListener = UserStore.addListener(this._onChange);
    ApiUtil.fetchCurrentUser(window.CURRENT_USER.id);
  },
  componentWillUnmount: function () {
    this.groupListener.remove();
  },
  _onChange: function () {
    this.setState({users_group: UserStore.findUserById(window.CURRENT_USER.id)});

    if(this.state.users_group !== undefined){
      this.state.users_group.groups.forEach(function (group) {

        if (group.id === this.props.group.id){
          var node = ReactDOM.findDOMNode(this.refs.toggle);
          node.checked = true;
        }
      }.bind(this))
    }
  },
  _toggleGroup: function (e) {
    e.stopPropagation();
    var node = ReactDOM.findDOMNode(this.refs.toggle);

    if (e.currentTarget.checked){
      ApiUtil.createUsersGroup(this.props.group, function () {
        node.checked = true;
      });
    } else {
      debugger;
        ApiUtil.destroyUsersGroup(this.state.users_group, function () {
          node.checked = false;
        });
    }
  },
  render: function () {
    return(
      <div className="group-item container-fluid resizable" draggable="true"
        key={this.props.group.id}
        onClick={this.props.onClick}>
        <div className="group-item-text">
          <p className="title">{this.props.group.title}</p>
          Where: <br />{this.props.group.location}
          <br />
          About Us: <br />{this.props.group.body}<br />
        <input type="checkbox" ref="toggle" name="checkbox" onClick={this._toggleGroup} />
        </div>
      </div>
    );
  }
});

module.exports = GroupItem;
