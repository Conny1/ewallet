import express from "express";
import { Login, Register } from "../controlers/Auth.js";
import { setBalance } from "../controlers/user.js";

const Router = express.Router();

Router.post("/register", Register, setBalance);
Router.post("/login", Login);

export default Router;
