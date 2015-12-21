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

  handleChange: function (e) {
    this.setState({location: e.target.value});
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
        <form className='new-group' onSubmit={this.createGroup}>
          <table>
            <tr>
              <td>
              <label htmlFor='group_title'>Name:</label>
              </td>
              <td>
              <input
                type='text'
                id='group_title'
                valueLink={this.linkState("title")} />
              </td>
            </tr>
            <tr>
              <td>
              <label htmlFor='group_body'>About Group:</label>
              </td>
              <td>
              <input
                type='text'
                id='group_body'
                valueLink={this.linkState("body")}
              />
            </td>
            </tr>
            <tr>
              <td>
              <label htmlFor='group_location'>Location: </label>
              </td>
              <td>
                <input
                  type='text'
                  id='group_location'
                  valueLink={this.linkState("location")}
                />
              </td>
            </tr>
            <tr>
              <td></td>
              <td>
                <button className="btn btn-primary" data-dismiss="modal">Create Group</button>
              </td>
            </tr>
          </table>
          <br />
        </form>
    );
  }
});

module.exports = GroupForm;
