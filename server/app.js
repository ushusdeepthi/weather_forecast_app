import express from "express";
import cors from "cors";
import indexRouter from "./routes/index.js";

const app = express();
const corsOptions = {
  origin: "*",
  credentials: true,
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions));

app.use(express.json());

const port = 8000;

app.use("/api/forecast", indexRouter);

app.listen(port, () => console.log(`Server running on port ${port}`));
