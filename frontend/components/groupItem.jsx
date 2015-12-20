var React = require('react');
var GroupStore = require('../stores/group');
var ApiUtil = require('../util/apiUtil');
var Search = require('./search.jsx');

var GroupItem = React.createClass({
  render: function () {
    return(
      <div className="group-item container-fluid resizable" draggable="true" 
        key={this.props.group.id}
        onClick={this.props.onClick}>
        <div className="group-item-text">
          <p className="title">Name: {this.props.group.title}</p>
          Where: {this.props.group.location}
          <br />
          About Us: {this.props.group.body}
        </div>
      </div>
    );
  }
});

module.exports = GroupItem;
