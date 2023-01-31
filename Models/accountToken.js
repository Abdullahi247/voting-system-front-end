const mongoose = require('mongoose')

const Schema = mongoose.Schema

const TokenSchema = new Schema({
    accountId : {type : mongoose.Schema.Types.ObjectId,},
    token : {type : String},
    contact : {type : String},
    exppp : Number,
    // expireAt : {type :Date, default :Date.now, index : {expires : 21600000}}
}, {timestamps : true})


const Token =  mongoose.model("Token", TokenSchema)

module.exports = {Token}