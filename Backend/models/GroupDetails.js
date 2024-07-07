const mongoose = require("mongoose");


const GroupSchema = mongoose.Schema({
  groupName: {
    type: String,
  },

  groupId: {
    type: String,
  },

  userList: {
    type: [String],
  },

});

module.exports = mongoose.model("GroupList", GroupSchema);