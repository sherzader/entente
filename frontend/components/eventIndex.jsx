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
        <div className="search-events">
          <form className="navbar-form navbar-right" role="search">
            <div className="form-group">
              <input type="text"
                     className="form-control"
                     placeholder="Search"
                     onChange={this.handleChange}
                     value={this.state.searchString}>
                   </input>
            </div>
          </form>
        </div>
        <div className="filter-events event-index">
          {eventElements}
        </div>
    </div>
    );
  }
});

module.exports = EventIndex;
