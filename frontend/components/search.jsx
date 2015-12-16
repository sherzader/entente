var React = require('react');
var GroupStore = require('../stores/group');
var ApiUtil = require('../util/apiUtil');
var GroupItem = require('./groupItem.jsx');

var Search = React.createClass({
  getInitialState: function(){
    return { searchString: "" };
  },
  _onChange: function(event){
    this.setState({searchString: event.currentTarget.value});
  },
  componentDidMount: function () {
    this.groupListener = GroupStore.addListener(this._onChange);
    ApiUtil.fetchGroups();
  },
  componentWillUnmount: function () {
    this.groupListener.remove();
  },
  filteredGroups: function(){
    var regex = new RegExp(this.state.searchString);
    return GroupStore.all().filter(function(group){
      return (group.title.search(regex) > -1);
    });
  },
  render: function(){
    return(
      <div className="navbar">
        <nav className="nav navbar-default">
          <h1>Entente</h1>
          <form className="navbar-form navbar-right" role="search">
            <div className="form-group">
              <input type="text"
                     className="form-control"
                     placeholder="Search"
                     onChange={this._onChange}
                     value={this.state.searchString}>
                   </input>
            </div>
          </form>
        </nav>
        <div className="filter-groups">{
            this.filteredGroups().map(function(group){
              return (<GroupItem group={group} />);
            })
          }
        </div>
      </div>
    );
  }
});

module.exports = Search;
