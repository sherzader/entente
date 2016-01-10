var React = require('react');
var GroupStore = require('../stores/group');
var ApiUtil = require('../util/apiUtil');
var GroupItem = require('./groupItem.jsx');
var History = require('react-router').History;

var GroupIndex = React.createClass({
  mixins: [History],
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
    this.history.pushState(null, "groups/" + group.id, {} );
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
          return (group.title.search(regex) > -1);
        });
    }
  },
  render: function () {
    if (this.state.searchString === ""){
      var groupList = this.props.groups.map(function (group) {
        return (<GroupItem
                key={group.id}
                onClick={this.handleItemClick}
                group={group}
                history={this.props.history}
                />)
      }.bind(this));
    } else {
      var groupList = this.filterGroups().map(function (group) {
        return (<GroupItem
                key={group.id}
                onClick={this.handleItemClick}
                group={group}
                history={this.props.history}
                />)
        }.bind(this));
    }
    return(
      <div className="col-md-7 group-index">
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
