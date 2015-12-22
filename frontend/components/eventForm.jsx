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
      <div>
        <form className='new-event' onSubmit={this.createEvent}>
            <div className='col-md-offset-3 col-md-6'>
              <label htmlFor='event_title'>Event Name</label>
              <input
                type='text'
                id='event_title'
                valueLink={this.linkState("title")}
              />
          </div><br />
            <label htmlFor='event_body'>About Event</label>
              <textarea
                className='form-control'
                id='event_body'
                valueLink={this.linkState("body")}
              />
            <label htmlFor='event_location'>Location</label>
              <input
                type='text'
                id='event_location'
                valueLink={this.linkState("location")}
              />
            <br/>
            <label className="fa fa-calendar" htmlFor='event_date'></label>
              <input
                type='datetime-local'
                id='event_date'
                valueLink={this.linkState("date")}
              /><br />
          <button className="btn btn-primary">Create Event</button>
        </form>
      </div>
    );
  }
});

module.exports = EventForm;
