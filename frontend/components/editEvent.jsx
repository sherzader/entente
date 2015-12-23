var React = require('react');
var ApiUtil = require('../util/apiUtil');
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var EventStore = require('../stores/event');
var History = require('react-router').History;

var EditEvent = React.createClass({
  mixins: [LinkedStateMixin, History],

  getInitialState: function () {
    return ({id: 0 , title: '', body: '', location: '', date: ''});
  },
  _updateEvent: function (e) {
    e.preventDefault();

    ApiUtil.editEvent(this.state, function () {
      this.history.push("/events/" + this.state.id);
    }.bind(this));
  },
  _onChange: function () {
    var group_event = EventStore.findEventById(this.props.params.id) ||
                      ApiUtil.fetchEvent(this.props.params.id) || {};
    this.setState(group_event);
  },
  componentDidMount: function () {
    this.eventListener = EventStore.addListener(this._onChange);
    ApiUtil.fetchEvent(this.props.params.id);
  },
  componentWillUnmount: function () {
    this.eventListener.remove();
  },
  render: function () {
    return(
      <div className='edit-event'>
        <form className='edit-event' onSubmit={this._updateEvent}>
          <table>
            <tr>
              <td>
              <label htmlFor='event_title'>Name:</label>
              </td>
              <td>
              <input
                type='text'
                id='event_title'
                valueLink={this.linkState('title')}
                />
              </td>
            </tr>
            <tr>
              <td>
              <label htmlFor='event_body'>About Event:</label>
              </td>
              <td>
              <input
                type='text'
                id='event_body'
                valueLink={this.linkState("body")}
                />
            </td>
            </tr>
            <tr>
              <td>
              <label htmlFor='event_location'>Location: </label>
              </td>
              <td>
                <input
                  type='text'
                  id='event_location'
                  valueLink={this.linkState("location")}
                  />
              </td>
            </tr>
            <tr>
              <td>
              <label className="fa fa-calendar" htmlFor='event_date'></label>
              </td>
              <td>
                <input
                  type='date'
                  id='event_date'
                  valueLink={this.linkState("date")}
                  />
              </td>
            </tr>
            <tr>
              <td></td>
              <td>
                <button className="btn btn-primary">Update Event</button>
              </td>
            </tr>
          </table>
          <br />
        </form>
      </div>
    );
  }
});

module.exports = EditEvent;
