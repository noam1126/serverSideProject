//Nadav Yeshua 318949831
//Noam Nachshon 322315086
//Shaylee Nahum 322714486

const mongoose = require("mongoose");
const schema = mongoose.Schema;

// creating new mongo schema for the users
const usersSchema = new schema(
    {
      id: {
        type: Number,
        required: true,
      },
      firstname: {
        type: String,
        required: true,
      },
      lastname: {
        type: String,
        required: true,
      },
      birthday: {
        type: String,
        required: true,
      },
    },
    { versionKey: false }
);

const user = mongoose.model("users", usersSchema);

module.exports = user;
