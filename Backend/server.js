const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const PORT = process.env.PORT || 3000;
const connectDB = require('./db/connect')
require("dotenv").config();
const errorMiddleware = require('./middlewares/Error')
const mainRouter = require('./routes/route')

app.use(express.json());

app.use(
  cors({
    allowedHeaders: ["Content-Type"],
  })
);

app.use('/api',mainRouter);

app.get("/", (req, res) => {
  res.send("Hello");
});

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(PORT, () =>
      console.log(`server is running on port ${PORT} and connected to DB`)
    );
  } catch (error) {
    console.log(error);
  }
};

app.use(errorMiddleware)

start();
