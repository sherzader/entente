var React = require('react');
var ApiUtil = require('../../util/apiUtil');
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
  closeModal: function () {
    $('.new-group').on('submit', function() {
      $('.modal').modal('hide');
    });
  },
  render: function () {
    return(
      <div className='group-form'>
        <dl>
        <div className="form-create-header"><dt>Make a Group</dt></div>
        </dl>
        <form className='new-group' onSubmit={this.createGroup} role='form'>
          <div className="col-md-9">
          <dl>
          <div className="row">
            <div className="col-md-4">
                <label htmlFor='group_title'><dt>Name</dt></label>
            </div>
            <div className="col-md-5">
              <input
                type='text'
                id='group_title'
                placeholder='Provide a group name'
                valueLink={this.linkState("title")} />
            </div><br />
          </div>
          <div className="row">
            <div className="col-md-4">
              <label htmlFor='group_location'><dt>Location</dt></label>
            </div>
            <div className="col-md-5">
              <input
                type='text'
                id='group_location'
                placeholder='General gathering spot'
                valueLink={this.linkState("location")}
                />
            </div><br />
          </div>
          <div className="row">
            <div className="col-md-4">
                <label htmlFor='group_body'><dt>About</dt></label>
            </div>
            <div className="col-md-5">
              <textarea
                id='group_body'
                placeholder='What defines your group?'
                valueLink={this.linkState("body")}
                />
            </div>
          </div>
        </dl>
          <hr />
            <button className="btn btn-primary" onSubmit={this.closeModal()}><dt>Create</dt></button>
          </div>
        </form>
      </div>
    );
  }
});

module.exports = GroupForm;
