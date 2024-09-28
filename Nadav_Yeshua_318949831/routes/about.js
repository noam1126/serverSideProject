//Nadav Yeshua 318949831
//Noam Nachshon 322315086
//Shaylee Nahum 322714486

var express = require("express");
var router = express.Router();

// getting the developers info using the GET method
router.get("/about", (req, res) => {
  try {
    // Array of developer objects
    const developers = [
      {
        firstname: "Nadav",
        lastname: "Yeshua",
        id: 318949831,
        email: "nadavy6666@gmail.com",
      },
      {
        firstname: "Noam",
        lastname: "Nachshon",
        id: 322315086,
        email: "noam1126@gmail.com",
      },
      {
        firstname: "Shaylee",
        lastname: "Nahun",
        id: 322714486,
        email: "Shayleenah@gmail.com",
      },
    ];
    res.json(developers); // Responds with the array of developers as JSON
  } catch (error) {
    // Send an error response if there's an issue
    console.error("Error retrieving developer information:", error);
    res.status(500).json({ error: "Failed to retrieve developer information" });
  }
});

module.exports = router;
