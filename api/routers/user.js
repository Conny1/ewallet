import express from "express";
import {
  addtopending,
  getBalance,
  getPending,
  getPendingtransactions,
  receiveMoney,
  sendMoney,
  setBalance,
} from "../controlers/user.js";

const Router = express.Router();
// update pending after sending money
Router.post("/addpending", addtopending);
// send money
Router.put("/sendmoney", sendMoney);
// receive money
Router.put("/receivemoney", receiveMoney);
Router.post("/setbalance/:id", setBalance);
Router.get("/getbalance/:id", getBalance);
Router.get("/pending/:id", getPending);
// user pending
Router.get("/pendingtransacrion/:id", getPendingtransactions);

export default Router;
