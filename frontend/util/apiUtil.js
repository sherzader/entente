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
  // },
  // createBench: function (bench, callback) {
  //   $.ajax({
  //     url: "api/benches",
  //     method: "POST",
  //     data: {bench: bench},
  //     success: function (b) {
  //       ApiActions.receiveSingle(b);
  //       callback();
  //     }
  //   });
  }
};

module.exports = ApiUtil;
