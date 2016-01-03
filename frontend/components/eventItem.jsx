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
        key={this.props.groupEvent.id}>
          <div className="event-item-header">
            <button className="glyphicon glyphicon-menu-right" title="See More Info" onClick={this._showEvent}></button>
            <dl>
              <dt>{this.props.groupEvent.title}</dt>
              <dt>{this.props.groupEvent.location}</dt>
            </dl>
          </div><br /><br />
        <span className="date">{this.props.groupEvent.date}<br />{this.props.groupEvent.time}</span><br />
      </div>
    );
  }
});

module.exports = EventItem;
