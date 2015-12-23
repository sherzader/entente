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

var addUser = function (user) {
  _users[user.id] = user;
};


UserStore.all = function () {
  var users = [];
  for (var id in _users){
    users.push(_users[id]);
  }
  return users;
};

UserStore.findUserById = function (id) {
  return (_users[id]);
};

UserStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case UserConstants.USERS_RECEIVED:
      resetUsers(payload.users);
      this.__emitChange();
      break;
    case UserConstants.USER_RECEIVED:
      addUser(payload.user);
      this.findUserById(payload.user.id);
      this.__emitChange();
      break;
  }
};


module.exports = UserStore;
