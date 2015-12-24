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
      <div>
        <div className="filter-groups">{
          <GroupIndex groups={this.filteredGroups()} />
          }
        </div>
      </div>
    );
  }
});

module.exports = Search;
