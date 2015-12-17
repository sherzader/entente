var AppDispatcher = require('../dispatcher/appDispatcher');
var GroupConstants = require('../constants/groupConstants');
var EventConstants = require('../constants/eventConstants');


var ApiActions = {
  receiveAllGroups: function (groups) {
    AppDispatcher.dispatch({
      actionType: GroupConstants.GROUPS_RECEIVED,
      groups: groups
    });
  },
  receiveAllEvents: function (events) {
    AppDispatcher.dispatch({
      actionType: EventConstants.EVENTS_RECEIVED,
      events: events
    })
  },
  receiveGroup: function (group) {
    AppDispatcher.dispatch({
      actionType: GroupConstants.GROUP_RECEIVED,
      group: group
    });
  },
  receiveEvent: function (group_event) {
    AppDispatcher.dispatch({
      actionType: EventConstants.EVENT_RECEIVED,
      group_event: group_event
    });
  },
  removeGroup: function (group) {
    AppDispatcher.dispatch({
      actionType: GroupConstants.GROUP_REMOVE,
      group: group
    });
  }
};

module.exports = ApiActions;
