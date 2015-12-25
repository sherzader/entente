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
        <dt><h3>Make a Group</h3></dt>
        </dl>
        <form className='new-group' onSubmit={this.createGroup}>
            <dl>
              <label htmlFor='group_title'><dt>Group Name &nbsp;</dt></label>
              <input
                type='text'
                id='group_title'
                valueLink={this.linkState("title")} />
              <label htmlFor='group_body'><dt>About &nbsp;</dt></label>
              <textarea
                id='group_body'
                valueLink={this.linkState("body")}
              />
              <label htmlFor='group_location'><dt>Area &nbsp;</dt></label>
                <input
                  type='text'
                  id='group_location'
                  valueLink={this.linkState("location")}
                />
                <button className="btn btn-primary"><dt>Create</dt></button>
            </dl>
          <br />
        </form>
      </div>
    );
  }
});

module.exports = GroupForm;
