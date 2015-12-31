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
        <form className='new-event' onSubmit={this.createEvent} role='form'>
            <div className='col-md-3'>
              <label htmlFor='event_title'>Event Name</label><br /><br />
              <div class="form-group has-feedback">
                <label className='control-label' htmlFor='event_location'>Location</label><br /><br />
                <i class="glyphicon glyphicon-map-marker form-control-feedback"></i>
              </div>
              <label htmlFor='event_date'>Date/Time</label><br /><br />
              <label htmlFor='event_body'>Description</label><br />
            </div>
            <div className='col-md-6'>
              <input
                type='text'
                id='event_title'
                placeholder='Add a clear, succinct title'
                valueLink={this.linkState("title")}
              /><br /><br />
              <input
                type='text'
                id='event_location'
                placeholder="glyphicon glyphicon-map-marker"
                valueLink={this.linkState("location")}
              /><br/><br />
              <input
                type='datetime'
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
          <button className="btn btn-primary">Create Event</button>
        </form>
      </div>
    );
  }
});

module.exports = EventForm;
