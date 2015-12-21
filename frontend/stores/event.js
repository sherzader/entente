var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/appDispatcher');
var EventStore = new Store(AppDispatcher);
var EventConstants = require('../constants/eventConstants');

var _events = {};

var resetEvents = function (events) {
  _events = {};
  events.forEach(function (group_event) {
    _events[group_event.id] = group_event;
  });
};

var addEvent = function (group_event) {
  _events[group_event.id] = group_event;
};

var removeEvent = function (event) {
  delete _events[event.id];
};

EventStore.findEventById = function (id) {

  var res;
  this.all().forEach(function (group_event) {
    if (id == group_event.id) {
      res = group_event;
    }
  }.bind(this));
  return res;
};

EventStore.all = function () {
  var events = [];
  for (var id in _events){
    events.push(_events[id]);
  }
  return events;
};

EventStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case EventConstants.EVENTS_RECEIVED:
      resetEvents(payload.events);
      this.__emitChange();
      break;
    case EventConstants.EVENT_RECEIVED:
      addEvent(payload.group_event);
      this.__emitChange();
      break;
    case EventConstants.EVENT_REMOVE:
      removeEvent(payload.group_event);
      this.__emitChange();
      break;
  }
};


module.exports = EventStore;
