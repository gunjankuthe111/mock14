const express = require("express");
const User = require("../models/user.model");
const app = express.Router()


app.get("/",async(req,res)=>{
    try {
        const usrs = await User.find()
        res.status(200).send(usrs);
    } catch (e) {
        res.status(400).send({message: e.message});
    }
})

app.post("/",async(req,res)=>{
    const {name,level,score} =req.body

    try {
        if(!name || !level ||!score){
            return res.send({message:"Missing Details"})
        }
        const user = new User({name,level,score})
        await user.save()
        res.status(200).send(user);
    } catch (e) {
        res.status(400).send({message: e.message});
    }
})

module.exports = app