var React = require('react');
var DayPicker = require('react-day-picker');

var Calendar = React.createClass({
  render: function() {
    return (
      <DayPicker onDayClick={ (e, day) => alert(day)} />
    );
  }
});

module.exports = Calendar;
