const mongoose = require("mongoose")

const Schema = mongoose.Schema


const VotersSchema = new Schema({
    phone: { type: String },
    firstName: { type: String },
    lastName: { type: String },
    otherName: { type: String },
    password: { type: String },
    email: { type: String },
    
    contestantId: { type: String },
    generalContestantId: { type: String },

}, { timestamps: true })

const Voters = mongoose.model("Voters", VotersSchema)

module.exports = Voters

