var React = require('react');
var GroupStore = require('../stores/group');
var ApiUtil = require('../util/apiUtil');
var Link = require('react-router').Link;

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
        var group_path = "/groups/" + group.id;
        return (<li key={group.id} className='group-search-result'><Link to={group_path}>{group.title}</Link></li>)
      }.bind(this));
    }
    return(
      <div className="input-group">
        <input type="text"
               className="form-control group-search"
               placeholder="Search groups..."
               onChange={this.handleChange}
               value={this.state.searchString}>
             </input>
         <ul className="group-search-list">
           {groupList}
         </ul>
      </div>
    );
  }
});

module.exports = SearchGroups;
