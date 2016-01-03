var React = require('react');
var EventStore = require('../stores/event');
var ApiUtil = require('../util/apiUtil');

var EventItem = React.createClass({
  _showEvent: function (e) {
    e.preventDefault();
    this.props.history.push("/events/" + this.props.groupEvent.id);
  },
  render: function () {
    var pst_date = "";
    if (this.props.groupEvent){
      pst_date = new Date(this.props.groupEvent.date).toLocaleTimeString();
    }
    return(
      <div className="event-item"
        key={this.props.groupEvent.id}
        onClick={this._showEvent}>
          <dl>
          <dt>{this.props.groupEvent.title}</dt>
          <dt>{this.props.groupEvent.location}</dt>
          <span className="date">{new Date(this.props.groupEvent.date).toDateString()} {pst_date} UTC</span>
        </dl>
        {this.props.groupEvent.body}
      </div>
    );
  }
});

module.exports = EventItem;
