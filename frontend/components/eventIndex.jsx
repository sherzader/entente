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
      var regex = new RegExp(this.state.searchString);
      return this.state.events.filter(function(groupEvent){
        return (groupEvent.title.search(regex) > -1);
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
    }, this);
    return(
      <div>
        <div className="form-group has-feedback">
          <form className="navbar-form navbar-right" role="search">
            <div className="input-group">
              <input type="text"
                     className="form-control search-events"
                     placeholder="Search events..."
                     onChange={this.handleChange}
                     value={this.state.searchString} />
              <div className="input-group-btn">
                <button className="btn btn-default" type="submit"><i className="glyphicon glyphicon-search"></i></button>
              </div>
            </div>
          </form>
        </div><br /><div className="show-group-headers"><dl><dt>Events</dt></dl><hr /></div>
      <div className="event-items">
          {eventElements}
        </div>
    </div>
    );
  }
});

module.exports = EventIndex;
