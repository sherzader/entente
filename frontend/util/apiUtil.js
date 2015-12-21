var ApiActions = require('../actions/apiAction');

var ApiUtil = {
  fetchUsers: function (users) {
    $.ajax({
      url: "/users",
      type: "GET",
      dataType: "json",
      data: {users: users},
      success: function (u) {
        ApiActions.receiveAllUsers(u);
       }
     });
 },
 fetchCurrentUser: function () {
  $.ajax({
    url: "/users/" + window.CURRENT_USER.id,
    type: "GET",
    dataType: "json",
    success: function (user) {
      ApiActions.receiveUser(user);
    }
  });
  },
  fetchGroups: function (){
    $.ajax({
      url: "api/groups",
      success: function (groups) {
        ApiActions.receiveAllGroups(groups);
      }
    });
  },
  fetchEvents: function (groupId) {
    $.ajax({
      url: "api/groups/" + groupId + "/events",
      success: function (events) {
        ApiActions.receiveAllEvents(events);
      }
    });
  },
  fetchGroup: function (id) {
    $.ajax({
      url: "api/groups/" + id,
      success: function (group) {
        ApiActions.receiveGroup(group);
      }
    });
  },
  fetchEvent: function (id) {
    $.ajax({
      url: "api/events/" + id,
      success: function (group_event) {
        ApiActions.receiveEvent(group_event);
      }
    });
  },
  createGroup: function (group, callback) {
    $.ajax({
      url: "api/groups",
      method: "POST",
      data: {group: group},
      success: function (g) {
        ApiActions.receiveGroup(g);
        callback();
      }
    });
  },
  createEvent: function (groupId, group_event, callback) {
    $.ajax({
      url: "api/groups/" + groupId + "/events",
      method: "POST",
      data: {event: group_event},
      success: function (e) {
        ApiActions.receiveEvent(e);
        callback();
      }
    });
  },
  editGroup: function (group, callback) {
    $.ajax({
      url: "api/groups/" + group.id,
      method: "PATCH",
      data: {group: group},
      success: function (g) {
        ApiActions.receiveGroup(g);
        callback();
      }
    });
  },
  destroyGroup: function (group, callback) {
    $.ajax({
      url: "api/groups/" + group.id,
      method: "DELETE",
      data: {group: group},
      success: function (g) {
        ApiActions.removeGroup(g);
        callback();
      }
    });
  },
  destroyEvent: function (group_event, callback) {
    $.ajax({
      url: "api/events/" + group_event.id,
      method: "DELETE",
      data: {event: group_event},
      success: function (e) {
        ApiActions.removeEvent(e);
        callback();
      }
    });
  }
};

module.exports = ApiUtil;
