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
            <div className="event-header-caption">
              <dl>
                <dt>{this.props.groupEvent.title}</dt>
                <dd>{this.props.groupEvent.location}</dd>
              </dl>
            </div>
          </div><br /><br />
        <div className="date">{this.props.groupEvent.date}<br />{this.props.groupEvent.time}</div><br />
      </div>
    );
  }
});

module.exports = EventItem;
