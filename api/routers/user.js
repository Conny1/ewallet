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
import { VerifyAdmin, VerifyUser } from "../utils/VerifyTokens.js";

const Router = express.Router();
// update pending after sending money
Router.post("/addpending", addtopending);
// send money
Router.put("/sendmoney", sendMoney);
// receive money
Router.put("/receivemoney", VerifyAdmin, receiveMoney);
Router.post("/setbalance/:id", setBalance);
Router.get("/getbalance/:id", VerifyUser, getBalance);
Router.get("/pending/:id", VerifyAdmin, getPending);
// user pending
Router.get("/pendingtransacrion/:id", VerifyUser, getPendingtransactions);

export default Router;
