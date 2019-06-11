const express = require("express");
const app = express();

// Server Static Assets while in production
if (process.env.NODE_ENV === "production") {
  // set static folder
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const port = process.env.PORT || 5000;
const server = app.listen(port, () =>
  console.log(`Server running on port${port}`)
);
