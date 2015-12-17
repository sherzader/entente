var React = require('react');
var GroupStore = require('../stores/group');
var ApiUtil = require('../util/apiUtil');
var GroupItem = require('./groupItem.jsx');

var Show = React.createClass({
  getInitialState: function () {
    var groupId = this.props.params.id;
    var group = this._findGroupById(groupId) || {} ;
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
  _onChange: function () {
    var groupId = this.props.params.id;
    var group = this._findGroupById(groupId);
    this.setState({ group: group });
  },
  componentDidMount: function () {
    this.groupListener = GroupStore.addListener(this._onChange);
    ApiUtil.fetchGroup();
  },
  componentWillUnmount: function () {
    this.groupListener.remove();
  },
  render: function () {
    return(
      <div><GroupItem group={this.state.group}/></div>
    );
  }
});

module.exports = Show;
