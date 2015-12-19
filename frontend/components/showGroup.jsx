var React = require('react');
var GroupStore = require('../stores/group');
var ApiUtil = require('../util/apiUtil');
var GroupItem = require('./groupItem.jsx');
var EventIndex = require('./eventIndex.jsx');
var EventForm = require('./eventForm.jsx');
var History = require('react-router').History;

var Show = React.createClass({
  mixins: [History],
  getInitialState: function () {
    var groupId = this.props.params.id;
    var group = GroupStore.findGroupById(groupId) ||
                 ApiUtil.fetchGroup(groupId) || {};
    return { group: group, selectedForm: false };
  },
  _deleteGroup: function () {
    var group = this.state.group;

    ApiUtil.destroyGroup(group, function () {
      this.history.push("/");
    }.bind(this));
  },
  _editGroup: function () {
    var group = this.state.group;

    ApiUtil.editGroup(group, function () {
      this.history.push("/groups/" + group.id);
    }.bind(this));
  },
  _onChange: function () {
    var groupId = this.props.params.id;
    var group = GroupStore.findGroupById(groupId);
    this.setState({ group: group });
  },
  _eventForm: function () {
    this.setState({selectedForm: true});
  },
  handleItemClick: function () {
    this.history.pushState(null, "/groups/" + this.state.group.id + "/events/new" );
  },
  componentDidMount: function () {
    this.groupListener = GroupStore.addListener(this._onChange);
  },
  componentWillUnmount: function () {
    this.groupListener.remove();
  },
  render: function () {
    if (this.state.selectedForm) {
      var selected = <EventForm />
    }
    return(
      <div className="group-item container-fluid">
        <div className="group-show container-fluid"
          onClick={this.props.onClick}>
            <br /><br />
            Name: {this.state.group.title}
            <br />
            Where: {this.state.group.location}
            <br />
            About Us: {this.state.group.body}
            <br /><br />
          <div className="group-btns">
            <button className="glyphicon glyphicon-remove"
                    onClick={this._deleteGroup}></button>
            <button className="glyphicon glyphicon-pencil"
                    onClick={this._editGroup}></button>
            <br></br>
            <button onClick={this.handleItemClick} groupId={this.props.params.id}>
              Add Event
            </button>
          </div>
        </div>
        {selected}
      <EventIndex group={this.state.group} history={this.history} />
      </div>
    );
  }
});

module.exports = Show;
