var React = require('react');
var EventStore = require('../../stores/event');
var ApiUtil = require('../../util/apiUtil');
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
    var event_img = "http://res.cloudinary.com/sherzader/image/upload/" + this.state.group_event.img_url;
    return(
      <div className="show-event-block">
        <div className='event-buttons'>
          <button className="glyphicon glyphicon-th" title="Back to Group" onClick={this._goBack}></button>
          <button className="glyphicon glyphicon-pencil" title="Edit Group" onClick={this._editEvent}></button>
          <button className="glyphicon glyphicon-trash" title="Delete Group" onClick={this._deleteEvent}></button>
        </div>
        <div className="show-event">
          <img className="event-img" src={event_img} alt="event-img"></img>
          <div className="event-caption">
            <dt>{this.state.group_event.title}</dt>
            Where: {this.state.group_event.location}
            <br />
            When: {this.state.group_event.date}
            <br />@{this.state.group_event.time}<br />
            About Event: {this.state.group_event.body}
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Show;
