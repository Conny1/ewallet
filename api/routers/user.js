import express from "express";
import {
  addtopending,
  getBalance,
  getPending,
  sendMoney,
  setBalance,
} from "../controlers/user.js";

const Router = express.Router();
// update pending after sending money
Router.post("/addpending", addtopending);
// send money
Router.put("/sendmoney", sendMoney);
Router.post("/setbalance/:id", setBalance);
Router.get("/getbalance/:id", getBalance);
Router.get("/pending/:id", getPending);

export default Router;
