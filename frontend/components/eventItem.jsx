var React = require('react');
var EventStore = require('../stores/event');
var ApiUtil = require('../util/apiUtil');

var EventItem = React.createClass({
  _showEvent: function (e) {
    e.preventDefault();
    this.props.history.push("/events/" + this.props.groupEvent.id);
  },
  _deleteEvent: function (e) {
    e.preventDefault();
    e.stopPropagation();

    ApiUtil.destroyEvent(this.props.groupEvent, function () {
      this.props.history.push("/groups/" + this.props.group.id)
    }.bind(this));
  },
  render: function () {
    return(
      <div className="event-item container-fluid"
        key={this.props.groupEvent.id} onClick={this._showEvent}>
          <br /><br />
          <p className="title">Name: {this.props.groupEvent.title}</p>
          <br />
          Where: {this.props.groupEvent.location}
          <br />
          When: {this.props.groupEvent.date}
          <br />
          About Event: {this.props.groupEvent.body}
          <br /><br />
          <button className="fa fa-bomb"
                  onClick={this._deleteEvent}></button>
      </div>
    );
  }
});

module.exports = EventItem;
