//Nadav Yeshua 318949831
//Noam Nachshon 322315086
//Shaylee Nahum 322714486

var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const mongoose = require("mongoose");
require("dotenv").config();

const User = require("./models/users");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/user");
var aboutRouter = require("./routes/about");
var addcaloriesRouter = require("./routes/addcalories");
var reportRouter = require("./routes/report");

var app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

mongoose.set("strictQuery", true);

// Connect to MongoDB and seed the initial user
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDB connected successfully");

    // Check if the initial user exists and seed if necessary
    User.findOne({ id: 123123 })
      .then(async (existingUser) => {
        if (!existingUser) {
          const initialUser = new User({
            id: 123123,
            first_name: "moshe",
            last_name: "israeli",
            birthday: new Date(1990, 0, 10), // January 10th, 1990
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
  .catch((err) => console.error("MongoDB connection error: ", err));

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/", aboutRouter);
app.use("/addcalories", addcaloriesRouter);
app.use("/", reportRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
