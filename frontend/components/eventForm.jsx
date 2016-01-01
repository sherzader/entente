var React = require('react');
var ApiUtil = require('../util/apiUtil');
var LinkedStateMixin = require('react-addons-linked-state-mixin');

var EventForm = React.createClass({
  mixins: [LinkedStateMixin],

  blankAttrs: {
    title: '',
    location: '',
    body: '',
    date: ''
  },

  getInitialState: function () {
    return (this.blankAttrs) ;
  },

  createEvent: function (e) {
    e.preventDefault();

    var group_event = this.state;
    ApiUtil.createEvent(this.props.group.id, group_event, function () {
      this.props.history.push("/groups/" + this.props.group.id);
    }.bind(this));

    this.setState(this.blankAttrs);
  },

  render: function () {
    return(
      <div className="jumbotron">
        <dl>
        <div className='form-header'><dt>Make an Event</dt></div>
        </dl>
        <form className='new-event' onSubmit={this.createEvent} role='form'>
            <div className='col-md-3 event-form-labels'>
              <dl>
              <label htmlFor='event_title'><dt>Event Name</dt></label><br /><br />
              <label className='control-label' htmlFor='event_location'><dt>Location</dt></label><br /><br />
              <label htmlFor='event_date'><dt>Date/Time</dt></label><br /><br />
              <label htmlFor='event_body'><dt>Description</dt></label><br />
              </dl>
            </div>
            <div className='col-md-8'>
              <br />
              <input
                type='text'
                id='event_title'
                placeholder='Add a clear, succinct title'
                valueLink={this.linkState("title")}
              /><br /><br /><br />
              <input
                type='text'
                id='event_location'
                placeholder="Provide a street/landmark"
                valueLink={this.linkState("location")}
              /><br/><br />
              <input
                type='datetime-local'
                id='event_date'
                placeholder="glyphicon glyphicon-calendar"
                valueLink={this.linkState("date")}
              /><br /><br />
            <textarea
              className='form-control'
              id='event_body'
              placeholder='Elaborate on this fantastic event you have planned.'
              valueLink={this.linkState("body")}
              /><hr />
            </div>
          <button className="btn btn-primary">Create</button>
        </form>
      </div>
    );
  }
});

module.exports = EventForm;
