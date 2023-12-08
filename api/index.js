import express from "express";
import AutherRouter from "./routers/Auth.js";
import UserRouter from "./routers/user.js";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();

// middlwares
app.use(cors());
app.use(express.json());

// routes

app.use("/auth", AutherRouter);
app.use("/users", UserRouter);

app.use((err, req, resp, next) => {
  const status = err.status || 500;
  const message = err.message || "Sever Error Or something went wrong";

  return resp.status(Number(status)).json({
    status: status,
    message: message,
    stuck: err.stuck,
  });
});

app.listen(5001, () => {
  console.log("Connected to port " + 5001);
});
