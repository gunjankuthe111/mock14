const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    name:{type:String,require:true},
    level:{type:String,require:true},
    score:{type:String,require:true}
},{
    timestamps:true
})

const User = mongoose.model("score",UserSchema)

module.exports = User