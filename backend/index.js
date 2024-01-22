const express = require("express");
const app = express();
const mainRouter = require("./routes/index");
const cors = require("cors");
const { authMiddleware } = require("./middleware");

app.use(cors());
app.use(authMiddleware);
app.use("/api/v1", mainRouter);
app.use(express.json());

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
