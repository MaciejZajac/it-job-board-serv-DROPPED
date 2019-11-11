const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    jobOffers: [
        {
            type: Schema.Types.ObjectId,
            required: "jobOffer"
        }
    ]
});

module.exports = mongoose.model("user", userSchema);
