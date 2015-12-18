var React = require('react');
var EventStore = require('../stores/event');
var ApiUtil = require('../util/apiUtil');

var Show = React.createClass({
  getInitialState: function () {
    var eventId = this.props.params.id;
    var group_event = this._findEventById(eventId) ||
                 ApiUtil.fetchEvent(eventId) || {};
    return { group_event: group_event, selectedForm: false };
  },
  _findEventById: function (id) {
    var res;
    EventStore.all().forEach(function (group_event) {
      if (id == group_event.id) {
        res = group_event;
      }
    }.bind(this));
    return res;
  },
  render: function () {
    return(
      <div className="event-show container-fluid"
        key={this.state.group_event.id}>
          <br /><br />
          <p className="title">Name: {this.state.group_event.title}</p>
          <br />
          Where: {this.state.group_event.location}
          <br />
          When: {this.state.group_event.date}
          <br />
          About Event: {this.state.group_event.body}
          <br /><br />
          <button className="fa fa-bomb"></button>
      </div>
    );
  }
});

module.exports = Show;
