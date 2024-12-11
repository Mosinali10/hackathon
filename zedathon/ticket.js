const express = require("express");
const multer = require("multer");
const app = express();

const upload = multer({ dest: "uploads/" });
app.use(express.json());

app.post("/submit-ticket", upload.single("attachment"), (req, res) => {
  const { name, email, issue } = req.body;
  const file = req.file;
  // Save ticket to database here
  res.status(200).send("Ticket submitted successfully!");
});

app.listen(3000, () => console.log("Server running on port 3000"));