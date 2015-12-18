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
    return this.blankAttrs;
  },

  handleChange: function (e) {
    this.setState({location: e.target.value});
  },

  _createEvent: function (e) {
    e.preventDefault();

    var group_event = this.state;
    ApiUtil.createEvent(this.props.params.id, group_event, function () {
      this.props.history.push("/groups/" + this.props.params.id);
    }.bind(this));

    this.setState(this.blankAttrs);
  },

  render: function () {
    return(
        <form className='new-event' onSubmit={this._createEvent}>
          <table>
            <tr>
              <td>
              <label htmlFor='event_title'>Name:</label>
              </td>
              <td>
              <input
                type='text'
                id='event_title'
                valueLink={this.linkState("title")} />
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
                <button className="btn btn-primary">Create Event</button>
              </td>
            </tr>
          </table>
          <br />
        </form>
    );
  }
});

module.exports = EventForm;
