var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/appDispatcher');
var UserStore = new Store(AppDispatcher);
var UserConstants = require('../constants/userConstants');

var _users = {};

var resetUsers = function (users) {
  _users = {};
  if (users.length === 1){
    _users[user.id] = user;
    return;
  }
  users.forEach(function (user) {
    _users[user.id] = user;
  });
};

UserStore.all = function () {
  var users = [];
  for (var id in _users){
    users.push(_users[id]);
  }
  return users;
};

UserStore.findUserById = function (id) {
    var res;
    this.all().forEach(function (user) {
      if (id == user.id) {
        res = user;
      }
    }.bind(this));
    return res;
};

UserStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case UserConstants.USERS_RECEIVED:
      resetUsers(payload.users);
      this.__emitChange();
      break;
    case UserConstants.USER_RECEIVED:
      this.findUserById(payload.user.id);
      this.__emitChange();
      break;
  }
};


module.exports = UserStore;
