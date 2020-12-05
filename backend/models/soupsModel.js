const mongoose = require("mongoose");

const SoupsChema = mongoose.Schema({

    title :{
        type :String,
        required : true
    }, 
    description :{
        type :String,
        required : true
    }, 
    price :{
        type :String,
        required : true
    }, 
    image :{
        type :String,
        required : true
    },
    popular :{
        type :Boolean,
        default : false
    }
})

module.exports = mongoose.model("Soups", SoupsChema);