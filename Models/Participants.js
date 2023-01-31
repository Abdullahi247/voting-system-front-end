const mongoose = require("mongoose")

const Schema = mongoose.Schema


const ParticipantSchema = new Schema({
    phone: { type: String },
    firstName: { type: String },
    lastName: { type: String },
    otherName: { type: String },
    password: { type: String },
    email: { type: String },
}, { timestamps: true })

const Participant = mongoose.model("Participant", ParticipantSchema)

module.exports = Participant

