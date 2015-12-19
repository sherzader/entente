var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/appDispatcher');
var GroupStore = new Store(AppDispatcher);
var GroupConstants = require('../constants/groupConstants');

var _groups = {};

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

GroupStore.all = function () {
  var groups = [];
  for (var id in _groups){
    groups.push(_groups[id]);
  }
  return groups;
};

GroupStore.findGroupById = function (id) {
    var res;
    this.all().forEach(function (group) {
      if (id == group.id) {
        res = group;
      }
    }.bind(this));
    return res;
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
  }
};


module.exports = GroupStore;
