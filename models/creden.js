const mongoose = require("mongoose");
const schema = mongoose.Schema;
const d = new Date();
let date = d.getDate();
const credSchema = new schema({
    name: String,
    password: String,


});

module.exports = mongoose.model("cred", credSchema);