var React = require('react');
var GroupStore = require('../stores/group');
var ApiUtil = require('../util/apiUtil');
var Search = require('./search.jsx');

var GroupItem = React.createClass({
  getInitialState: function () {
    return ({ groups: GroupStore.all() });
  },
  handleClick: function(event){
    this.setState({searchString: event.currentTarget.innerText});
  },
  render: function () {
    return(
      <div className="group-item"
        key={this.props.group.id}
        onClick={this.handleClick}>
          <br /><br />
          {this.props.group.title}
          {this.props.group.location}
          <br />
          {this.props.group.body}
      </div>
    );
  }
});

module.exports = GroupItem;
