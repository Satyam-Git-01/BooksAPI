const express = require("express");
const app = express();
require("dotenv").config();
const DbConnection = require("./services/dbService.js");
const { bookRouter } = require("./routes/bookRouter.js");
const cors = require("cors");
//const errorHandler = require("./middlewares/errorHandler.js");

app.use(cors());
app.use(express.json());
const CONNECTIONSTRING = process.env.CONNECTION_STRING;
const PORT_NUMBER = process.env.PORT_NUMBER;
//app.use(errorHandler());
app.get("/", (req, res) => res.json("Hello World!"));
app.listen(PORT_NUMBER, () =>
  console.log(`Example app listening on port ${PORT_NUMBER}!`)
);

DbConnection(CONNECTIONSTRING);
app.use("/books", bookRouter);
