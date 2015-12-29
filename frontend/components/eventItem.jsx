var React = require('react');
var EventStore = require('../stores/event');
var ApiUtil = require('../util/apiUtil');

var EventItem = React.createClass({
  _showEvent: function (e) {
    e.preventDefault();
    this.props.history.push("/events/" + this.props.groupEvent.id);
  },
  render: function () {
    return(
      <div className="event-item"
        key={this.props.groupEvent.id}
        onClick={this._showEvent}>
          <dl>
          <dt>{this.props.groupEvent.title}</dt>
          <dt>{this.props.groupEvent.location}</dt>
          <dt>{new Date(this.props.groupEvent.date).toDateString()} {new Date(this.props.groupEvent.date).toLocaleTimeString()}</dt>
        </dl>
        {this.props.groupEvent.body}
      </div>
    );
  }
});

module.exports = EventItem;
