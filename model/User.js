const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
 name: String,
 email: String,
 address: String,
 profile: String
});
module.exports = mongoose.model("User", userSchema);