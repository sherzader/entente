var React = require('react');
var ApiUtil = require('../util/apiUtil');
var LinkedStateMixin = require('react-addons-linked-state-mixin');

var GroupForm = React.createClass({
  mixins: [LinkedStateMixin],

  blankAttrs: {
    title: '',
    location: '',
    body: '',
  },

  getInitialState: function () {
    return this.blankAttrs;
  },

  componentDidMount: function () {
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
    var options = [];
    for (var i = 1; i <= 10; i++){
      options.push(<option key={i} value={i}>{i}</option>);
    }
    return(
      <form className='new-group' onSubmit={this.createGroup}>
        <div>
          <label htmlFor='group_title'>Name:</label>
          <input
            type='text'
            id='group_title'
            valueLink={this.linkState("title")}
          />
        </div>
        <div>
          <label htmlFor='group_body'>About Group:</label>
          <input
            type='text'
            id='group_body'
            valueLink={this.linkState("body")}
          />
        </div>

        <div>
          <label htmlFor='group_location'>Location: </label>
          <select name='group_seating' onChange={this.handleChange}>
            {options}
          </select>
        </div>

        <button>Create Group</button>
        <br />
      </form>
    );
  }
});

module.exports = GroupForm;
