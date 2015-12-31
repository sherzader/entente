var React = require('react');
var GroupStore = require('../stores/group');
var ApiUtil = require('../util/apiUtil');

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
  _showGroup: function () {
    path = "groups/" + this.props.groupId;
    this.props.history.push(path);
  },
  render: function(){
    var path = "";
    if (this.filteredGroups !== undefined){
      var groupList = this.filteredGroups.map(function (group) {
        return (<li key={group.id} className='group-search-result' groupId={group.id} onClick={this._showGroup}>{group.title}</li>);
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
