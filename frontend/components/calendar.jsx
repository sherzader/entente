var React = require('react');
var DayPicker = require('react-day-picker');
var DateUtils = require('react-day-picker').DateUtils;
var moment = require('moment');
var GroupStore = require('../stores/group');
var GroupIndex = require('./groupIndex.jsx');
var ApiUtil = require('../util/apiUtil');

var Calendar = React.createClass({
  getInitialState: function () {
    return ({value: moment().format("L"), month: new Date(), date: "", groups: GroupStore.all()});
  },
  _onChange: function () {
    this.setState({ groups: GroupStore.all() });
  },
  componentDidMount: function () {
    this.groupListener = GroupStore.addListener(this._onChange);
    ApiUtil.fetchGroups();
  },
  componentWillUnmount: function () {
    this.groupListener.remove();
  },
  handleInputChange: function(e) {
    var value = e.target;

    // Change the current month only if the value entered by the user is a valid
    // date, according to the `L` format
    if (moment(value, "L", true).isValid()) {
      this.setState({
        month: moment(value, "L").toDate(),
        value
      }, this.showCurrentDate);
    }
    else {
      this.setState({ value }, this.showCurrentDate);
    }
  },
  handleDayClick: function(e, day) {
    this.setState({date: day.toISOString()});
    this.filterGroups();

    this.setState({
      value: moment(day).format("L"),
      month: day
    });
  },
  showCurrentDate: function() {
    this.refs.daypicker.showMonth(this.state.month);
  },
  filterGroups: function(){
    var that = this;

    if (this.state.groups === undefined){
      return [];
    }
    if (this.state.date === ""){
      return this.state.groups;
    }
    var filteredGroups = this.state.groups.filter(function(group){
      var matches = group.event_dates.filter(function(event_date){
        return (event_date.slice(0, 10) === that.state.date.slice(0, 10));
      });
      return (matches.length > 0);
    });

    return filteredGroups;
  },
  render: function() {
    var selectedDay = moment(this.state.value).toDate();
    return (
      <div>
        <div className="Calendar">
          <input
            ref="input"
            type="text"
            value={ this.state.value }
            placeholder="YYYY-MM-DD"
            onChange={ this.handleInputChange }
            onFocus={ this.showCurrentDate } />
        </div>
        <DayPicker
                ref="daypicker"
                initialMonth={ this.state.month }
                modifiers={{
                  selected: day => DateUtils.isSameDay(selectedDay, day)
                }}
                onDayClick={ this.handleDayClick }
              />
        <GroupIndex groups={this.filterGroups()} />
      </div>
    );
  }
});

module.exports = Calendar;
