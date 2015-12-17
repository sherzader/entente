var AppDispatcher = require('../dispatcher/appDispatcher');
var GroupConstants = require('../constants/groupConstants');

var ApiActions = {
  receiveAll: function (groups) {
    AppDispatcher.dispatch({
      actionType: GroupConstants.GROUPS_RECEIVED,
      groups: groups
    });
  },
  receiveSingle: function (group) {
    AppDispatcher.dispatch({
      actionType: GroupConstants.GROUP_RECEIVED,
      group: group
    });
  },
  removeSingle: function (group) {
    AppDispatcher.dispatch({
      actionType: GroupConstants.GROUP_REMOVE,
      group: group
    });
  }
};

module.exports = ApiActions;
