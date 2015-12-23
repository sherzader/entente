var DayPicker = require('react-day-picker');
var React = require('react');

var Calendar = React.createClass({
  render: function () {
    return (<DayPicker initialMonth={ new Date(2016, 1) } />);
  }
});

module.exports = Calendar;
