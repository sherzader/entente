var React = require('react');
var DayPicker = require('react-day-picker');
var DateUtils = require('react-day-picker').DateUtils;
var moment = require('moment');
var GroupStore = require('../stores/group');
var GroupIndex = require('./groups/groupIndex.jsx');
var ApiUtil = require('../util/apiUtil');
var History = require('react-router').History;
window.myTour = require('../util/tour');

var Calendar = React.createClass({
  mixins: [History],
  getInitialState: function () {
    return ({value: moment().format("L"), month: new Date(), date: "", groups: GroupStore.all()});
  },
  _onChange: function () {
    this.setState({ groups: GroupStore.all() });
  },
  componentDidMount: function () {
    this.groupListener = GroupStore.addListener(this._onChange);
    ApiUtil.fetchGroups();
    if (!window.myTour.lifecyleComplete) {
      myTour.lifecyleComplete = true;
      myTour.start();
    }
  },
  componentWillUnmount: function () {
    this.groupListener.remove();
    myTour.complete();
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
  _refresh: function () {
    this.setState({value: moment().format("L"), month: new Date(), date: ""});
    this.showCurrentDate();
  },
  render: function() {
    var selectedDay = moment(this.state.value).toDate();
    return (
      <div className="row">
        <div className="Calendar">
          <DayPicker
                  ref="daypicker"
                  initialMonth={ this.state.month }
                  modifiers={{
                    selected: day => DateUtils.isSameDay(selectedDay, day)
                  }}
                  onDayClick={ this.handleDayClick }>
          </DayPicker>
          <span className="cal-caption">
            <span onClick={this._refresh}>Reset</span>
            <span>Filter By<span className="glyphicon glyphicon-triangle-top" /></span>
          </span>
        </div>
          <GroupIndex history={this.history} groups={this.filterGroups()} />
      </div>
    );
  }
});

module.exports = Calendar;
