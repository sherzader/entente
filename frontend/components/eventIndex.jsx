var React = require('react');
var EventStore = require('../stores/event');
var ApiUtil = require('../util/apiUtil');
var EventItem = require('./eventItem.jsx');

var EventIndex = React.createClass({
  getInitialState: function(){
    return { events: EventStore.all() };
  },
  _onChange: function(event){
    this.setState({ events: EventStore.all() });
  },
  componentDidMount: function () {
    this.eventListener = EventStore.addListener(this._onChange);
    ApiUtil.fetchEvents();
  },
  componentWillUnmount: function () {
    this.eventListener.remove();
  },

  render: function () {
    var eventElements = this.state.events.map(function (groupEvent) {
      return (<EventItem
              key={groupEvent.id}
              group={this.props.group}
              history={this.props.history}
              groupEvent={groupEvent} />)
    }, this);
    return(
      <div className="event-index">
        {eventElements}
      </div>
    );
  }
});

module.exports = EventIndex;
