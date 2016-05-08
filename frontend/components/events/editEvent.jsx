var React = require('react');
var ApiUtil = require('../../util/apiUtil');
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var EventStore = require('../../stores/event');
var History = require('react-router').History;

var EditEvent = React.createClass({
  mixins: [LinkedStateMixin, History],

  blankAttrs: {
    title: '',
    location: '',
    body: '',
    date: '',
    messages: ''
  },

  getInitialState: function () {
    return (this.blankAttrs);
  },
  tryToSave: function (e) {
    e.preventDefault();

    var group_event = this.state;
    if (group_event.title == '' || group_event.location == '' || group_event.body == '' ||      group_event.date) {
      this.setState({ messages: 'Oh snap! Fields cannot be blank.' });
    } else {
      ApiUtil.editEvent(this.state, function () {
        this.history.push("/events/" + this.state.id);
      }.bind(this));
    }
  },
  _goBack: function () {
    this.history.push("/events/" + this.state.id);
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
    var errorMessages;
    if (this.state.messages.length > 0) {
      errorMessages =
      <div className="alert alert-danger">{this.state.messages}</div>;
    }
    return(
      <div className='edit-form'>
        {errorMessages}
        <div className='navbar-pushup'></div>
        <dl>
        <div className='form-create-header'><dt>Update an Event</dt></div>
        </dl>
        <form role='form'>
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
                <input
                  type='text'
                  id='event_body'
                  placeholder="What's planned?"
                  valueLink={this.linkState("body")}
                  />
              </div><br />
            </div>
          </dl>
            <button className="btn btn-primary" onClick={this.tryToSave}>Update</button>
            <button className="btn btn-warning" onClick={this._goBack}>Back to Event Page</button>
          </div>
        </form>
      </div>
    );
  }
});

module.exports = EditEvent;
