var React = require('react');
var EventStore = require('../stores/event');
var ApiUtil = require('../util/apiUtil');

var EventItem = React.createClass({
  render: function () {
    return(
      <div className="event-item container-fluid"
        key={this.props.groupEvent.id}
        onClick={this.props.onClick}>
          <br /><br />
          Name: {this.props.groupEvent.title}
          <br />
          Where: {this.props.groupEvent.location}
          <br />
          When: {this.props.groupEvent.date}
          <br />
          About Event: {this.props.groupEvent.body}
          <br /><br />
      </div>
    );
  }
});

module.exports = EventItem;
