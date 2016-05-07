var React = require('react');
var ApiUtil = require('../../util/apiUtil');
var LinkedStateMixin = require('react-addons-linked-state-mixin');

var GroupForm = React.createClass({
  mixins: [LinkedStateMixin],

  blankAttrs: {
    title: '',
    location: '',
    body: '',
    organizer_id: '',
    messages: ''
  },
  getInitialState: function () {
    return this.blankAttrs;
  },
  closeModal: function () {
    $('.modal').modal('hide');
  },
  tryToSave: function (e) {
    e.preventDefault();
    var group = this.state;

    if (group.title == '' || group.location == '' || group.body == '') {
      this.setState({ messages: 'Oh snap! Fields cannot be blank.' });
    } else {
      ApiUtil.createGroup(group, function () {
        this.props.history.pushState( { createdGroup: true }, this.props.location);
      }.bind(this));

      this.setState(this.blankAttrs);
      this.closeModal();
    }
  },
  render: function () {
    var errorMessages;
    if (this.state.messages.length > 0) {
      errorMessages =
      <div className="alert alert-danger">{this.state.messages}</div>;
    }
    return(
      <div className='group-form'>
        <dl>
        <div className="form-create-header"><dt>Make a Group</dt></div>
        </dl>
        <form className='new-group' role='form'>
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
              <input
                type='text'
                id='group_body'
                placeholder='What defines your group?'
                valueLink={this.linkState("body")}
                />
            </div>
          </div>
          </dl>
            <button className="btn btn-primary" onClick={this.tryToSave}>Create Group</button>
              {errorMessages}
          </div>
        </form>
      </div>
    );
  }
});

module.exports = GroupForm;
