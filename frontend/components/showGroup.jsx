var React = require('react');
var GroupStore = require('../stores/group');
var ApiUtil = require('../util/apiUtil');
var GroupItem = require('./groupItem.jsx');

var Show = React.createClass({
  getInitialState: function () {
    return({ group: GroupStore.fetchGroup(this.props.params)});
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
