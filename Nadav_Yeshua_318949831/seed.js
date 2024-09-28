//Nadav Yeshua 318949831
//Noam Nachshon 322315086
//Shaylee Nahum 322714486

const mongoose = require("mongoose");
const User = require("./models/User");

// Connect to MongoDB
mongoose
  .connect(
    "mongodb+srv://noam:noam1126@cluster0.ustdgsm.mongodb.net/myapp?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("Connected to MongoDB");

    // Check if the initial user exists
    User.findOne({ id: 123123 })
      .then(async (existingUser) => {
        if (!existingUser) {
          const initialUser = new User({
            id: 123123,
            first_name: "moshe",
            last_name: "israeli",
            birthday: new Date(1990, 0, 10),
          });
          await initialUser.save();
          console.log("Initial user seeded successfully");
        } else {
          console.log("Initial user already exists");
        }
      })
      .catch((err) => {
        console.error("Error finding initial user:", err);
      });
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });
