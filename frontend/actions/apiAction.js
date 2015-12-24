var AppDispatcher = require('../dispatcher/appDispatcher');
var GroupConstants = require('../constants/groupConstants');
var EventConstants = require('../constants/eventConstants');
var UserConstants = require('../constants/userConstants');

var ApiActions = {
  receiveAllUsersGroups: function (users_groups) {
    AppDispatcher.dispatch({
      actionType: GroupConstants.USERS_GROUPS_RECEIVED,
      users_groups: users_groups
    });
  },
  receiveUsersGroup: function (users_group) {
    AppDispatcher.dispatch({
      actionType: GroupConstants.USERS_GROUP_RECEIVED,
      users_group: users_group
    });
  },
  removeUsersGroup: function (users_group) {
    AppDispatcher.dispatch({
      actionType: GroupConstants.USERS_GROUP_REMOVE,
      users_group: users_group
    });
  },
  receiveAllUsers: function (users) {
    AppDispatcher.dispatch({
      actionType: UserConstants.USERS_RECEIVED,
      users: users
    });
  },
  receiveCurrentUser: function (user) {
    AppDispatcher.dispatch({
      actionType: UserConstants.USER_RECEIVED,
      user: user
    });
  },
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
  },
  removeEvent: function (group_event) {
    AppDispatcher.dispatch({
      actionType: EventConstants.EVENT_REMOVE,
      group_event: group_event
    });
  }
};

module.exports = ApiActions;
