//Nadav Yeshua 318949831
//Noam Nachshon 322315086
//Shaylee Nahum 322714486

const express = require("express");
const User = require("../models/users");
const router = express.Router();

// GET request for /users/:id
router.get("/:id", async (req, res) => {
  try {
    const user = await User.findOne({ id: Number(req.params.id) }); // Ensure id is treated as a number
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error retrieving user details", error });
  }
});

module.exports = router;
