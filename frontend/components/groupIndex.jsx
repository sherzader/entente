var React = require('react');
var GroupStore = require('../stores/group');
var ApiUtil = require('../util/apiUtil');
var GroupItem = require('./groupItem.jsx');

var GroupIndex = React.createClass({
  getInitialState: function(){
    return { groups: GroupStore.all() };
  },
  _onChange: function(event){
    this.setState({ groups: GroupStore.all() });
  },
  componentDidMount: function () {
    this.groupListener = GroupStore.addListener(this._onChange);
    ApiUtil.fetchGroups();
  },
  componentWillUnmount: function () {
    this.groupListener.remove();
  },
  render: function () {
    var groupElements = this.props.groups.map(function (group) {
      return (<GroupItem key={group.id} group={group} />)
    });
    return(
      <div className="group-index">
        {groupElements}
      </div>
    );
  }
});

module.exports = GroupIndex;
