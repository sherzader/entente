var React = require('react');
var ReactDOM = require('react-dom');
var GroupStore = require('../stores/group');
var ApiUtil = require('../util/apiUtil');
var Search = require('./search.jsx');

var GroupItem = React.createClass({
  getInitialState: function () {
    var user_group = {};
    return({user_group: user_group});
  },
  componentDidMount: function(){
    this.groupListener = GroupStore.addListener(this._onChange);
  },
  componentWillUnmount: function () {
    this.groupListener.remove();
  },
  _onChange: function () {
    this.props.group.users.forEach(function (user) {

      if (user.id === window.CURRENT_USER.id){
        var node = ReactDOM.findDOMNode(this.refs.toggle);
        node.checked = true;
      }
    }.bind(this))
  },
  _toggleGroup: function (e) {
    e.stopPropagation();

    if (!e.currentTarget.checked){
      ApiUtil.destroyUserGroup(this.state.user_group, function () {
        e.currentTarget.checked = false
      });
    } else {
      ApiUtil.createUserGroup(this.props.group, function () {
        e.currentTarget.checked = true;
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
        <input type="checkbox" ref="toggle" name="my-checkbox" onClick={this._toggleGroup}/>
        </div>
      </div>
    );
  }
});

module.exports = GroupItem;
