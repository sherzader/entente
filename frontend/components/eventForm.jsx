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
  closeModal: function () {
    $('.new-event').on('submit', function() {
      $('.modal').modal('hide');
    });
  },
  render: function () {
    return(
      <div className='event-form'>
        <dl>
        <div className='form-create-header'><dt>Make an Event</dt></div>
        </dl>
        <form className='new-event' onSubmit={this.createEvent} role='form'>
            <div className='col-md-9'>
              <dl>
              <div className="row">
                <div className="col-md-4">
                  <label htmlFor='event_title'><dt>Event Name</dt></label><br /><br />
                </div>
              <div className="col-md-5">
                <input
                  type='text'
                  id='event_title'
                  placeholder='Add a clear title'
                  valueLink={this.linkState("title")}
                />
              </div><br />
            </div>
            <div className="row">
              <div className="col-md-4">
                <label htmlFor='event_location'><dt>Location</dt></label><br /><br />
              </div>
              <div className="col-md-5">
                <input
                  type='text'
                  id='event_location'
                  placeholder='Provide a street/landmark'
                  valueLink={this.linkState("location")}
                />
              </div><br />
            </div>
            <div className="row">
              <div className="col-md-4">
                <label htmlFor='event_date'><dt>Date/Time</dt></label><br /><br />
              </div>
              <div className="col-md-5">
                <input
                  type='datetime-local'
                  id='event_date'
                  valueLink={this.linkState("date")}
                />
              </div><br />
            </div>
            <div className="row">
              <div className="col-md-4">
                <label htmlFor='event_body'><dt>Description</dt></label><br />
              </div>
              <div className="col-md-5">
                <textarea
                  className='form-control'
                  id='event_body'
                  placeholder='Elaborate on what you have planned'
                  valueLink={this.linkState("body")}
                  />
              </div><br />
            </div>
          </dl>
          <hr />
            <button className="btn btn-primary" onSubmit={this.closeModal()}>Create</button>
          </div>
        </form>
      </div>
    );
  }
});

module.exports = EventForm;
