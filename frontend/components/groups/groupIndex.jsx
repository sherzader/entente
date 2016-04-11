var React = require('react');
var GroupStore = require('../../stores/group');
var ApiUtil = require('../../util/apiUtil');
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
  handleChange: function(e) {
    this.setState({ searchString: e.currentTarget.value });
  },
  filterGroups: function(){
    if (this.state.searchString === ""){
      return this.state.groups;
    } else {
        var regex = new RegExp(this.state.searchString.toLowerCase());
        return this.state.groups.filter(function(group){
          return (group.title.toLowerCase().trim().search(regex) > -1);
        });
    }
  },
  render: function () {
    if (this.state.searchString === ""){
      var groupList = this.props.groups.map(function (group) {
        return (<GroupItem
                key={group.id}
                group={group}
                />)
      }.bind(this));
    } else {
      var groupList = this.filterGroups().map(function (group) {
        return (<GroupItem
                  key={group.id}
                  group={group}
                />)
        }.bind(this));
    }
    return(
      <div>
        <div className="group-search input-group">
              <input type="text"
                     className="form-control"
                     placeholder="Search groups..."
                     onChange={this.handleChange}
                     value={this.state.searchString}>
              </input>
            </div>
        <div className="group-row">
          <div className="col-4 col-md-4 group-index">
            <div className="group-index-caption">Find your Community<span className="glyphicon glyphicon-share-alt" /></div>
            {groupList}
          </div>
        </div>
      </div>
    );
  }
});

module.exports = GroupIndex;
