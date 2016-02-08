var React = require('react');
var GroupStore = require('../stores/group');
var ApiUtil = require('../util/apiUtil');
var GroupItem = require('./groupItem.jsx');

var GroupIndex = React.createClass({
  getInitialState: function(){
    return { searchString: "", groups: GroupStore.all() };
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
    this.props.history.push("groups/" + group.id);
  },
  handleChange: function(e) {
    this.setState({ searchString: e.currentTarget.value });
  },
  filterGroups: function(){
    if (this.state.searchString === ""){
      return this.state.groups;
    } else {
        var regex = new RegExp(this.state.searchString);
        return this.state.groups.filter(function(group){
          return (group.title.toLowerCase().trim().search(regex) > -1);
        });
    }
  },
  render: function () {
    if (this.state.searchString === ""){
      var groupList = this.props.groups.map(function (group) {
        var boundClick = this.handleItemClick.bind(null, group);
        return (<GroupItem
                key={group.id}
                onClick={boundClick}
                group={group}
                history={this.props.history}
                />)
      }.bind(this));
    } else {
      var groupList = this.filterGroups().map(function (group) {
        var boundClick = this.handleItemClick.bind(null, group);
        return (<GroupItem
                key={group.id}
                onClick={boundClick}
                group={group}
                history={this.props.history}
                />)
        }.bind(this));
    }
    return(
      <div className="col-md-5 group-index">
        <div className="input-group">
          <input type="text"
                 className="form-control group-search"
                 placeholder="Search groups..."
                 onChange={this.handleChange}
                 value={this.state.searchString}>
          </input>
        </div>
        {groupList}
      </div>
    );
  }
});

module.exports = GroupIndex;
