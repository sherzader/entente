var React = require('react');
var EventStore = require('../stores/event');
var ApiUtil = require('../util/apiUtil');
var EventItem = require('./eventItem.jsx');

var EventIndex = React.createClass({
  getInitialState: function(){
    return { searchString: "", events: EventStore.all() };
  },
  handleChange: function(e){
    this.setState({searchString: e.currentTarget.value});
  },
  _onChange: function(){
    this.setState({ events: EventStore.all() });
  },
  componentDidMount: function () {
    this.eventListener = EventStore.addListener(this._onChange);
    ApiUtil.fetchEvents(this.props.group.id);
  },
  componentWillUnmount: function () {
    this.eventListener.remove();
  },
  filteredEvents: function(){
    if (this.state.searchString === ""){
      return this.state.events;
    }else {
      var regex = new RegExp(this.state.searchString.toLowerCase());
      return this.state.events.filter(function(groupEvent){
        return (groupEvent.title.toLowerCase().trim().search(regex) > -1);
      });
    }
  },
  render: function () {
    var eventElements = this.filteredEvents().map(function (groupEvent) {
      return (<EventItem
              key={groupEvent.id}
              group={this.props.group}
              history={this.props.history}
              groupEvent={groupEvent} />)
    }.bind(this));
    return(
      <div>
        <div className="search-events">
            <div className="input-group">
              <input type="text"
                     className="form-control"
                     placeholder="Search events..."
                     onChange={this.handleChange}
                     value={this.state.searchString} />
            </div>
        </div><br /><div className="show-group-headers"><dl><dt>Events</dt></dl><hr /></div>
      <div className="event-items">
          {eventElements}
        </div>
    </div>
    );
  }
});

module.exports = EventIndex;
