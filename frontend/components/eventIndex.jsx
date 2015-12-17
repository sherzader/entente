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
    ApiUtil.fetchEvents(this.props.groupId);
  },
  componentWillUnmount: function () {
    this.eventListener.remove();
  },
  handleItemClick: function () {
    this.props.history.pushState(null, "/events", {} );
  },
  render: function () {
    var handleItemClick = this.handleItemClick;
    var eventElements = this.state.events.map(function (groupEvent) {
      var boundClick = handleItemClick.bind(null, groupEvent);
      return (<EventItem key={groupEvent.id}
              onClick={boundClick}
              groupEvent={groupEvent} />)
    });
    return(
      <div className="event-index">
        {eventElements}
      </div>
    );
  }
});

module.exports = EventIndex;
