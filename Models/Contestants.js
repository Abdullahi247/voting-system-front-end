const mongoose = require("mongoose")

const Schema = mongoose.Schema


const ContestantSchema = new Schema({
    name: { type: String },
    firstName: { type: String },
    lastName: { type: String },
    imageLink: { type: String },
    email: { type: String },
    position: { type: String },
    contact: { type: String },
    contestantId: { type: String },
    generalContestantId: { type: String },
}, { timestamps: true })

const Contestant = mongoose.model("Contestant", ContestantSchema)

module.exports = Contestant

