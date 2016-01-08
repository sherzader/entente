var React = require('react');
var GroupStore = require('../stores/group');
var ApiUtil = require('../util/apiUtil');
var GroupItem = require('./groupItem.jsx');
var History = require('react-router').History;

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
      <div className="col-md-7 group-index">
        {groupElements}
      </div>
    );
  }
});

module.exports = GroupIndex;
