var React = require('react');
var GroupStore = require('../stores/group');
var ApiUtil = require('../util/apiUtil');
var GroupItem = require('./groupItem.jsx');
var History = require('react-router').History;

var Show = React.createClass({
  mixins: [History],
  getInitialState: function () {
    var groupId = this.props.params.id;
    var group = this._findGroupById(groupId) ||
                    ApiUtil.fetchGroup(groupId) || {};
    return { group: group };
  },
  _findGroupById: function (id) {
    var res;
    GroupStore.all().forEach(function (group) {
      if (id == group.id) {
        res = group;
      }
    }.bind(this));
    return res;
  },
  deleteGroup: function () {
    var group = this.state.group;

    ApiUtil.destroyGroup(group, function () {
      this.history.push("/");
    }.bind(this));
  },
  _onChange: function () {
    var groupId = this.props.params.id;
    var group = this._findGroupById(groupId);
    this.setState({ group: group });
  },
  componentDidMount: function () {
    this.groupListener = GroupStore.addListener(this._onChange);
  },
  componentWillUnmount: function () {
    this.groupListener.remove();
  },
  render: function () {
    return(
      <div className="group-item container-fluid"
        onClick={this.props.onClick}>
          <br /><br />
          Name: {this.state.group.title}
          <br />
          Where: {this.state.group.location}
          <br />
          About Us: {this.state.group.body}
          <br /><br />
        <button className="glyphicon glyphicon-remove"
                onClick={this.deleteGroup}></button>
        <button className="glyphicon glyphicon-pencil"></button>
      </div>
    );
  }
});

module.exports = Show;
