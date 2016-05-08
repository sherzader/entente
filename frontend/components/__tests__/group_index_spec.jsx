'use strict';

jest.unmock('../groups/groupIndex.jsx');

describe('GroupIndex', function () {
  before('each', function () {
    var GroupIndex = require('../components/groups/groupIndex/jsx');
    var GroupStore = require('../stores/group.js');
  });

  it('adds a listener to the Group Store', function () {
    var groupStoreListenerCalls = GroupStore.addListener.mock.calls;
    expect(groupStoreListenerCalls.length).toBe(1);
  });

  it('calls GroupStore.all when the listener is triggered', function () {
    var groupStoreListenerCalls = GroupStore.addListener.mock.calls;
    var listenerFunction = groupStoreListenerCalls[0][0];
    listenerFunction();
    var groupStoreAllCalls = GroupStore.all.mock.calls;
    expect(groupStoreAllCalls.length).toBe(1);
  });

});
