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
    var pst_date = new Date(Date.parse(this.state.group_event.date) - 8) + "";
    return(
      <div className="block"
        key={this.state.group_event.id}>
          <br /><br />
          <p className="title">Name: {this.state.group_event.title}</p>
          <br />
          Where: {this.state.group_event.location}
          <br />
          When: {pst_date}
          <br />
          About Event: {this.state.group_event.body}
          <br /><br />
          <button className="glyphicon glyphicon-pencil"
                  onClick={this._editEvent}></button>
                <button className="fa fa-bomb"
                  onClick={this._deleteEvent}></button>
                <button className="fa fa-arrow-circle-left"
                  onClick={this._goBack}></button>
      </div>
    );
  }
});

module.exports = Show;
