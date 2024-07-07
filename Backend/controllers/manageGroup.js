const userModel = require("../models/userGroupList");
const ErrorHandler = require("../utils/errorHandler");
const groupModel = require("../models/GroupDetails")

const addGroup = async (req, res, next)=>{
    const {groupName,members} = req.body;  
    console.log(members);
    const groupId = Math.floor(1000 + Math.random() * 9000).toString();

    const newGroup = {
      groupName: groupName,
      groupId: groupId,
    };

    const result = await groupModel.create({
        groupName: groupName,
        groupId: groupId,
        userList:members
    })

    for(var i=0;i<members.length;i++){
        const user = await userModel.findOne({username:members[i]});
        user.groupList.push(newGroup);
        const result = await user.save();
    }
    res.status(201).json({message:"success"});
}

const deleteGroup = async (req, res, next) => {
    const { email, groupname } = req.body;
    const existingUser = await userModel.findOne({ email: email });
    let newArray = existingUser.groupList.filter((item) => item !== groupname);
    existingUser.groupList.push(groupname);
    const result = await existingUser.save();
    res.status(201).json({ groupList: existingUser.groupList });
};

const getGroups = async (req, res, next) => {
    const username  = req.query.username;
    // console.log(username);
    const existingUser = await userModel.findOne({ username: username});
    res.status(201).json({groupList: existingUser.groupList});
}

const getUsers = async (req,res,next) => {
    const groupId = req.query.groupId;
    console.log(groupId);
    const groupInfo = await groupModel.findOne({groupId:groupId});
    res.status(201).json({userList:groupInfo.userList});
}

module.exports = {addGroup, getGroups, getUsers};
