//Nadav Yeshua 318949831
//Noam Nachshon 322315086
//Shaylee Nahum 322714486

const express = require("express");
const Calories = require("../models/calories");
const router = express.Router();

// Handle POST request to /addcalories
router.post("/", async (req, res) => {
  const { user_id, year, month, day, description, category, amount } = req.body;

  // Validate category
  const availableCategories = ["breakfast", "lunch", "dinner", "other"];
  if (!availableCategories.includes(category)) {
    return res.status(400).json({ error: "Invalid category" });
  }

  // Create and save new calorie entry
  const newCalorie = new Calories({
    user_id,
    year,
    month,
    day,
    description,
    category,
    amount,
  });

  try {
    await newCalorie.save();
    res
      .status(201)
      .json({ message: "Calorie consumption item added successfully" });
  } catch (error) {
    console.error("Error adding calorie consumption item:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
