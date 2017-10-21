const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema ({
    firstName: {
        type: String,
        require: true
    },
    lastName: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true,
        unique: true,
        match: [/.+\@.+\..+/, "Please enter a valid e-mail address"]
    },
    headshot: { 
        data: Buffer, 
        contentType: String 
    },
    linkedIn: {
        type: String
    },
    gitHubProfile: {
        type: String
    },
    bio: {
        type: String
    },
    projects: [{
        type: Schema.Types.ObjectId,
        ref: "Project"
    }]
});

console.log("i'm in models/user.js");
const User = mongoose.model("User", userSchema);
module.exports = User;