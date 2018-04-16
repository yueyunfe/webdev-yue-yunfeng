// var mongoose = require('mongoose');
// var UserSchema = require("./user.schema.server");
//
// var UserModel = mongoose.model("UserModel", UserSchema);
//
// UserModel.createUser = createUser;
//
// module.exports = UserModel;
//
// function createUser(user) {
//   return UserModel.create(user);
// }
var mongoose = require('mongoose');
var UserSchema = require('./user.schema.server.js');
var UserModel = mongoose.model('User', UserSchema);

UserModel.createUser = createUser;
UserModel.findUserById = findUserById;
UserModel.findUserByUsername = findUserByUsername;
UserModel.findUserByCredentials = findUserByCredentials;
UserModel.updateUser = updateUser;
UserModel.deleteUser = deleteUser;
UserModel.findUserByFacebookId = findUserByFacebookId;

module.exports = UserModel;

function createUser(user) {
  return UserModel.create(user);
}

function findUserById(userId) {
  return UserModel.findById(userId);
}

function findUserByUsername(username) {
  return UserModel.findOne({ username: username });
}

function findUserByCredentials(username, password) {
  return UserModel.findOne({ username: username, password: password });
}

function updateUser(userId, user) {
  return UserModel.findByIdAndUpdate(userId, user);
}

function deleteUser(userId) {
  return UserModel.findByIdAndRemove(userId);
}

function findUserByFacebookId(facebookId) {
  return UserModel.findOne({'facebook.id': facebookId});
}
