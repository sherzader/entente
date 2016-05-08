var React = require('react');
var ApiUtil = require('../../util/apiUtil');
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var GroupStore = require('../../stores/group');
var History = require('react-router').History;

var EditGroup = React.createClass({
  mixins: [LinkedStateMixin, History],

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
  tryToSave: function (e) {
    e.preventDefault();
    var group = this.state;

    if (group.title == '' || group.location == '' || group.body == '') {
      this.setState({ messages: 'Oh snap! Fields cannot be blank.' });
    } else {
      ApiUtil.editGroup(this.state, function () {
        this.history.push("/groups/" + this.props.params.id);
      }.bind(this));
    }
  },
  _goBack: function () {
    this.history.push("/groups/" + this.props.params.id);
  },
  _onChange: function () {
    var group = GroupStore.findGroupById(this.props.params.id) ||
                      ApiUtil.fetchGroup(this.props.params.id) || {};
    this.setState(group);
  },
  componentDidMount: function () {
    this.groupListener = GroupStore.addListener(this._onChange);
    ApiUtil.fetchGroup(this.props.params.id);
  },
  componentWillUnmount: function () {
    this.groupListener.remove();
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
        <div className="form-create-header"><dt>Update Group</dt></div>
        </dl>
        <form role='form'>
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
            <button className="btn btn-primary" onClick={this.tryToSave}>Update Group</button>
            <button className="btn btn-warning" onClick={this._goBack}>Back to Group Page</button>
          </div>
        </form>
      </div>
    );
  }
});

module.exports = EditGroup;
