var React = require('react');
var GroupStore = require('../stores/group');
var ApiUtil = require('../util/apiUtil');
var Link = require('react-router').Link

var SearchGroups = React.createClass({
  getInitialState: function(){
    return { searchString: "", groups: GroupStore.all() };
  },
  componentDidMount: function () {
    this.groupListener = GroupStore.addListener(this._onChange);
    ApiUtil.fetchGroups();
  },
  _onChange: function () {
    this.setState({groups: GroupStore.all()});
  },
  componentWillUnmount: function () {
    this.groupListener.remove();
  },
  handleChange: function(e) {
    this.setState({ searchString: e.currentTarget.value });
    this.filteredGroups = this.filterGroups();
  },
  filterGroups: function(){
    var regex = new RegExp(this.state.searchString);
    return this.state.groups.filter(function(group){
      return (group.title.search(regex) > -1);
    });
  },
  render: function(){
    var path = "";
    if (this.filteredGroups !== undefined){
      var groupList = this.filteredGroups.map(function (group) {
        path = "/groups/" + group.id;
        return (<li key={group.id}><Link to={path}>{group.title}</Link></li>);
      });
    }
    return(
      <div className="input-group">
        <input type="text"
               className="form-control group-search"
               placeholder="Search groups..."
               onChange={this.handleChange}
               value={this.state.searchString}>
             </input>
             <ul className="groupSearchList">
               {groupList}
             </ul>
      </div>
    );
  }
});

module.exports = SearchGroups;
