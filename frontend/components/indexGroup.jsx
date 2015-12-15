var React = require('react');
var GroupStore = require('../stores/group');
var ApiUtil = require('../util/apiUtil');
var Search = require('./search.jsx');

var IndexGroup = React.createClass({
  getInitialState: function () {
    return ({ groups: GroupStore.all() });
  },
  _onChange: function () {
    this.setState({ groups: GroupStore.all() });
  },
  componentDidMount: function () {
    this.groupListener = GroupStore.addListener(this._onChange);
    ApiUtil.fetchGroups();
  },
  componentWillUnmount: function () {
    this.groupListener.remove();
  },
  render: function () {
    var groups = this.state.groups.map(function (group) {
      return(
              <div className="group" key={group.id + 1}><br /><br />
                <li key={group.id}>{group.title}</li>
                {group.location}<br />{group.body}
              </div>
            );
          });
    return(
      <div className="index-group"><Search /></div>
    );
  }
});

module.exports = IndexGroup;
