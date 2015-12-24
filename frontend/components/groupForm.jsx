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
          <table>
            <tbody>
            <dl>
            <tr>
              <td>
              <label htmlFor='group_title'><dt>Name &nbsp;</dt></label>
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
              <label htmlFor='group_body'><dt>About &nbsp;</dt></label>
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
              <label htmlFor='group_location'><dt>Area &nbsp;</dt></label>
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
                <button className="btn btn-primary"><dt>Create</dt></button>
              </td>
            </tr>
            </dl>
            </tbody>
          </table>
          <br />
        </form>
      </div>
    );
  }
});

module.exports = GroupForm;
