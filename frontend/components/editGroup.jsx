var React = require('react');
var ApiUtil = require('../util/apiUtil');
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var GroupStore = require('../stores/group');
var History = require('react-router').History;

var EditGroup = React.createClass({
  mixins: [LinkedStateMixin, History],

  getInitialState: function () {
    return ({id: 0 , title: '', body: '', location: ''});
  },
  _updateGroup: function () {
    ApiUtil.editGroup(this.state, function () {
      this.history.push("/groups/" + this.props.params.id);
    }.bind(this));
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
    return(
      <div className='jumbotron'>
      <form className='edit-group' onSubmit={this._updateGroup}>
        <dl>
          <div className='form-header'><dt>Edit the Group</dt></div>
        </dl>
        <table>
          <tbody>
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
            <textarea
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
              <button className="btn btn-primary">Update</button>
            </td>
          </tr>
          </tbody>
        </table>
        <br />
      </form>
    </div>
    );
  }
});

module.exports = EditGroup;
