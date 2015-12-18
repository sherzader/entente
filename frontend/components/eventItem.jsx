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
      <div className="event-item container-fluid"
        key={this.props.groupEvent.id}
        onClick={this._showEvent}>
         <br /><br />
          <p className="title">Name: {this.props.groupEvent.title}</p>
          <br />
          Where: {this.props.groupEvent.location}
          <br />
          When: {new Date(this.props.groupEvent.date).toDateString()}
          <br />
          About Event: {this.props.groupEvent.body}
          <br /><br />
      </div>
    );
  }
});

module.exports = EventItem;
