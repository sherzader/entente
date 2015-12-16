var React = require('react');
var GroupStore = require('../stores/group');
var ApiUtil = require('../util/apiUtil');
var GroupIndex = require('./groupIndex.jsx');

var Search = React.createClass({
  getInitialState: function(){
    return { searchString: "", groups: GroupStore.all() };
  },
  handleChange: function(e){
    this.setState({searchString: e.currentTarget.value});
  },
  _onChange: function () {
    this.setState( {groups: GroupStore.all()});
  },
  componentDidMount: function () {
    this.groupListener = GroupStore.addListener(this._onChange);
    ApiUtil.fetchGroups();
  },
  componentWillUnmount: function () {
    this.groupListener.remove();
  },
  filteredGroups: function(){
    if (this.state.searchString === ""){
      return this.state.groups;
    }else {
      var regex = new RegExp(this.state.searchString);
      return this.state.groups.filter(function(group){
        return (group.title.search(regex) > -1);
      });
    }
  },
  render: function(){
    return(
      <div className="search">
          <form className="navbar-form navbar-right search" role="search">
            <div className="form-group">
              <input type="text"
                     className="form-control"
                     placeholder="Search"
                     onChange={this.handleChange}
                     value={this.state.searchString}>
                   </input>
            </div>
          </form>
        <div className="filter-groups">{
            <GroupIndex groups={this.filteredGroups()} />
          }
        </div>
      </div>
    );
  }
});

module.exports = Search;
