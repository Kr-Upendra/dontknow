import express from "express";
import morgan from "morgan";
import cors from "cors";

import { cricketApis } from "./routes/apiRoute.js";

const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.status(200).json({
    status: "success",
    message: "TESTING SERVER",
  });
});

app.use("/api/", cricketApis);

app.all("*", (req, res) => {
  res.status(404).json({
    status: "fail",
    message: `requested route ${req.originalUrl} does not exist on this server!`,
  });
});

export default app;
