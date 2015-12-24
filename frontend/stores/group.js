var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/appDispatcher');
var GroupStore = new Store(AppDispatcher);
var GroupConstants = require('../constants/groupConstants');

var _groups = {};
var _selectedGroups = {};

var resetGroups = function (groups) {
  _groups = {};
  groups.forEach(function (group) {
    _groups[group.id] = group;
  });
};
var addGroup = function (group) {
  _groups[group.id] = group;
};

var removeGroup = function (group) {
  delete _groups[group.id];
};

var resetUsersGroups = function (users_groups) {
  _selectedGroups = {};
  users_groups.forEach(function (users_group) {
    _selectedGroups[users_group.id] = users_group;
  });
};

var addUsersGroup = function (users_group) {
  _selectedGroups[users_group.id] = users_group;
};

var removeUsersGroup = function (users_group) {
  delete _selectedGroups[users_group.id];
};


GroupStore.allUsersGroups = function () {
  var selectedGroups = [];
  for (var id in _selectedGroups){
    selectedGroups.push(_selectedGroups[id]);
  }
  return selectedGroups;
};

GroupStore.all = function () {
  var groups = [];
  for (var id in _groups){
    groups.push(_groups[id]);
  }
  return groups;
};

GroupStore.findGroupById = function (id) {
    return (_groups[id]);
};

GroupStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case GroupConstants.GROUPS_RECEIVED:
      resetGroups(payload.groups);
      this.__emitChange();
      break;
    case GroupConstants.GROUP_RECEIVED:
      addGroup(payload.group);
      this.__emitChange();
      break;
    case GroupConstants.GROUP_REMOVE:
      removeGroup(payload.group);
      this.__emitChange();
      break;
    case GroupConstants.USERS_GROUP_RECEIVED:
      addUsersGroup(payload.users_group);
      this.__emitChange();
      break;
    case GroupConstants.USERS_GROUPS_RECEIVED:
      resetUsersGroups(payload.users_groups);
      this.__emitChange();
      break;
    case GroupConstants.USERS_GROUP_REMOVE:
      removeUsersGroup(payload.users_group);
      this.__emitChange();
      break;
  }
};


module.exports = GroupStore;
