var React = require('react');
var GroupStore = require('../stores/group');
var ApiUtil = require('../util/apiUtil');
var ReactDOM = require('react-dom');

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
    var search = ReactDOM.findDOMNode(this.refs.searchResults);
    var groups = this.filteredGroups();
    groups.forEach(function (group) {
      var link = "groups/" + group.id;
      search.appendChild(<li key={group.id}><a href={link}>{group.title}</a></li>);
    });
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
      <div className="input-group">
        <input type="text"
               className="form-control"
               placeholder="Search groups..."
               onChange={this.handleChange}
               value={this.state.searchString}>
             </input>
        <ul ref="searchResults"></ul>
        <div className="input-group-btn">
          <button className="btn btn-default" type="submit"><i className="glyphicon glyphicon-search"></i></button>
        </div>
      </div>
    );
  }
});

module.exports = SearchGroups;
