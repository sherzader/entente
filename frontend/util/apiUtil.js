var ApiActions = require('../actions/apiAction');

var ApiUtil = {
  createUsersGroup: function (group, callback) {
    $.ajax({
      url: "api/users_groups",
      method: "POST",
      data: {users_group: {group_id: group.id}},
      success: function (query) {
        ApiActions.receiveUsersGroup(query);
        callback();
      }
    });
  },
  destroyUsersGroup: function (user_group, callback) {
    $.ajax({
      url: "api/users_groups/" + user_group.id,
      method: "DELETE",
      success: function (query) {
        ApiActions.removeUsersGroup(query);
        callback();
      }
    });
  },
  fetchUsers: function () {
    $.ajax({
      url: "users",
      type: "GET",
      success: function (query) {
        ApiActions.receiveAllUsers(query);
       }
     });
   },
  fetchGroups: function (){
    $.ajax({
      url: "api/groups",
      success: function (query) {
        ApiActions.receiveAllGroups(query);
      }
    });
  },
  fetchCurrentUser: function (id) {
    $.ajax({
      url: "users/" + id,
      success: function (query) {
        ApiActions.receiveCurrentUser(query);
      }
    });
  },
  fetchEvents: function (groupId) {
    $.ajax({
      url: "api/groups/" + groupId + "/events",
      success: function (query) {
        ApiActions.receiveAllEvents(query);
      }
    });
  },
  fetchGroup: function (id) {
    $.ajax({
      url: "api/groups/" + id,
      success: function (query) {
        ApiActions.receiveGroup(query);
      }
    });
  },
  fetchEvent: function (id) {
    $.ajax({
      url: "api/events/" + id,
      success: function (query) {
        ApiActions.receiveEvent(query);
      }
    });
  },
  editEvent: function (group_event, callback) {
    $.ajax({
      url: "api/events/" + group_event.id,
      method: "PATCH",
      data: { event: group_event},
      success: function (query) {
        ApiActions.receiveEvent(query);
        callback();
      }
    });
  },
  createGroup: function (group, callback) {
    $.ajax({
      url: "api/groups",
      method: "POST",
      data: {group: group},
      success: function (query) {
        ApiActions.receiveGroup(query);
        callback();
      }
    });
  },
  createEvent: function (groupId, group_event, callback) {
    $.ajax({
      url: "api/groups/" + groupId + "/events",
      method: "POST",
      data: {event: group_event},
      success: function (query) {
        ApiActions.receiveEvent(query);
        callback();
      }
    });
  },
  editGroup: function (group, callback) {
    $.ajax({
      url: "api/groups/" + group.id,
      method: "PATCH",
      data: {group: group},
      success: function (query) {
        ApiActions.receiveGroup(query);
        callback();
      }
    });
  },
  destroyGroup: function (group, callback) {
    $.ajax({
      url: "api/groups/" + group.id,
      method: "DELETE",
      data: {group: group},
      success: function (query) {
        ApiActions.removeGroup(query);
        callback();
      }
    });
  },
  destroyEvent: function (group_event, callback) {
    $.ajax({
      url: "api/events/" + group_event.id,
      method: "DELETE",
      data: {event: group_event},
      success: function (query) {
        ApiActions.removeEvent(query);
        callback();
      }
    });
  },
  logout: function () {
      $.ajax({
        url: "logout",
        method: "DELETE",
        success: function () {
          window.location.href = '/login';
        }
      });
    }
};

module.exports = ApiUtil;
