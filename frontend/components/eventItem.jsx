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
      <div className="block event-item"
        key={this.props.groupEvent.id}
        onClick={this._showEvent}>
          <dl>
          <dt>Name: {this.props.groupEvent.title}</dt>
          <dt>Where: {this.props.groupEvent.location}</dt>
          <dt>When: {new Date(this.props.groupEvent.date).toDateString()} {new Date(this.props.groupEvent.date).toLocaleTimeString()}</dt>
          <dd>{this.props.groupEvent.body}</dd>
        </dl>
      </div>
    );
  }
});

module.exports = EventItem;
