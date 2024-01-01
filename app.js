const express = require("express");
const router = require("./router/router");
const cors = require("cors");
const PORT = process.env.PORT || 3001;

const app = express();
app.use(express.json());
const corsOptions = {
  origin: "*",
  credentials: true,
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions));

app.use(router);

app.listen(PORT, () => {
  console.log(`app started at ${PORT}`);
});
