var React = require('react');
var GroupStore = require('../stores/group');
var ApiUtil = require('../util/apiUtil');
var GroupItem = require('./groupItem.jsx');
var History = require('react-router').History;
var DayPicker = require('./dayPicker.jsx');

var GroupIndex = React.createClass({
  mixins: [History],
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
  handleItemClick: function (group) {
    this.history.pushState(null, "groups/" + group.id, {} );
  },
  render: function () {
    var handleItemClick = this.handleItemClick;
    var groupElements = this.props.groups.map(function (group) {
      var boundClick = handleItemClick.bind(null, group);
      return (<GroupItem key={group.id} onClick={boundClick} group={group} />)
    });
    return(
      <div>
        <div className="container group-index">
          {groupElements}
        </div>
      </div>
    );
  }
});

module.exports = GroupIndex;
