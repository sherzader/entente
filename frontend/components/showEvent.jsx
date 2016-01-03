var React = require('react');
var EventStore = require('../stores/event');
var ApiUtil = require('../util/apiUtil');
var EditEvent = require('./editEvent.jsx');
var History = require('react-router').History;

var Show = React.createClass({
  mixins: [History],
  getInitialState: function () {
    var eventId = this.props.params.id;
    var group_event = EventStore.findEventById(eventId) ||
                 ApiUtil.fetchEvent(eventId) || {};
    return { group_event: group_event };
  },
  _onChange: function () {
    var eventId = this.props.params.id;
    var group_event = EventStore.findEventById(eventId);
    this.setState({ group_event: group_event });
  },
  componentDidMount: function () {
    ApiUtil.fetchEvent(this.props.params.id);
    this.eventListener = EventStore.addListener(this._onChange);
  },
  componentWillUnmount: function () {
    this.eventListener.remove();
  },
  _editEvent: function (e) {
    e.preventDefault();
    this.props.history.push("/events/" + this.state.group_event.id + "/edit");
  },
  _deleteEvent: function (e) {
    e.preventDefault();

    ApiUtil.destroyEvent(this.state.group_event, function () {
      this.history.push("/groups/" + this.state.group_event.group_id)
    }.bind(this));
  },
  _goBack: function (e) {
    e.preventDefault();

    this.history.push("/groups/" + this.state.group_event.group_id);
  },
  render: function () {
    return(
      <div className="show-event-block">
        <div className='group-buttons'>
          <button className="glyphicon glyphicon-menu-left" title="Back to Group" onClick={this._goBack}></button>
          <button className="glyphicon glyphicon-pencil" title="Edit Group" onClick={this._editEvent}></button>
          <button className="glyphicon glyphicon-trash" title="Delete Group" onClick={this._deleteEvent}></button>
        </div>
        <div className="show-event">
          <img className="event-img" src={this.state.group_event.img_url} alt="event-img"></img>
          <p className="title">Name: {this.state.group_event.title}</p>
          Where: {this.state.group_event.location}
          <br />
          When: {this.state.group_event.date}
          <br />{this.state.group_event.time}<br />
          About Event: {this.state.group_event.body}
        </div>
      </div>
    );
  }
});

module.exports = Show;
