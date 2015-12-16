var ApiActions = require('../actions/apiAction');

var ApiUtil = {
  fetchGroups: function (){
    $.ajax({
      url: "api/groups",
      success: function (groups) {
        ApiActions.receiveAll(groups);
      }
    });
  },
  fetchGroup: function (id) {
    $.ajax({
      url: "api/groups" + id,
      success: function (group) {
        ApiActions.receiveSingle(group);
      }
    });
  },
  createGroup: function (group, callback) {
    $.ajax({
      url: "api/groups",
      method: "POST",
      data: {group: group},
      success: function (g) {
        ApiActions.receiveSingle(g);
        callback();
      }
    });
  }
};

module.exports = ApiUtil;
