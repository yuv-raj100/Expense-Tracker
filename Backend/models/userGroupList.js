const mongoose = require("mongoose");

const groupSchema = new mongoose.Schema({
  groupName: String,
  groupId: String,
});

const userGroupSchema = mongoose.Schema({
  username: {
    type: String,
  },
  
  groupList: {
    type: [groupSchema],
  },
});

module.exports = mongoose.model("UserGroupList", userGroupSchema);
