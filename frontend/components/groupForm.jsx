var React = require('react');
var ApiUtil = require('../util/apiUtil');
var LinkedStateMixin = require('react-addons-linked-state-mixin');

var GroupForm = React.createClass({
  mixins: [LinkedStateMixin],

  blankAttrs: {
    title: '',
    location: '',
    body: '',
    organizer_id: ''
  },

  getInitialState: function () {
    return this.blankAttrs;
  },

  createGroup: function (e) {
    e.preventDefault();
    var group = this.state;

    ApiUtil.createGroup(group, function () {
      this.props.history.push("/");
    }.bind(this));

    this.setState(this.blankAttrs);
  },

  render: function () {
    return(
      <div className="jumbotron">
        <dl>
        <div className="form-header"><dt>Make a Group</dt></div>
        </dl>
        <form className='new-group' onSubmit={this.createGroup}>
          <div className="col-md-3">
            <dl>
              <label htmlFor='group_title'><dt>Group Name</dt></label><br /><br />
              <label htmlFor='group_location'><dt>General Location</dt></label><br /><br />
              <label htmlFor='group_body'><dt>About</dt></label><br />
            </dl>
          </div>
          <div className="col-md-8">
            <br />
            <input
              type='text'
              id='group_title'
              valueLink={this.linkState("title")} /><br /><br /><br />
            <input
              type='text'
              id='group_location'
              valueLink={this.linkState("location")}
              /><br /><br /><br />
            <textarea
              id='group_body'
              valueLink={this.linkState("body")}
              /><hr />
              <button className="btn btn-primary"><dt>Create</dt></button>
          </div>
        </form>
      </div>
    );
  }
});

module.exports = GroupForm;
