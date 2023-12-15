import jwt from "jsonwebtoken";
import connection from "../utils/db.js";
import createError from "../utils/Error.js";
import bcrypt from "bcryptjs";
import { VerifyAccount } from "../utils/email.js";

export const Register = async (req, resp, next) => {
  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(req.body.password, salt);

  //   console.log(req.body);

  const q = `INSERT INTO ${process.env.DATABASE_NAME}.users(name, email, password, number)  VALUES(?)`;

  const values = [req.body.name, req.body.email, hash, req.body.number];
  const isValid = await getUserInfobyemail(req.body.email);
  if (isValid)
    return next(createError(406, "Account with that email already Exists"));

  connection.query(q, [values], async (err, result) => {
    // console.log(err);
    if (err) return next(createError(400, "Bad  Auth request"));

    // email to be sent to inbox for account confirmation
    await VerifyAccount({ email: req.body.email });

    // assign balance on account creation
    const userData = await getUserInfobyemail(req.body.email);
    // console.log(userData);
    if (!userData) return next(createError(500, "userData server error"));

    const isbalance = await setBalance(userData.id, userData.email);
    if (!isbalance) return next(500, "Error assigning account balance");

    return resp.status(200).json({
      success: true,
      status: 200,
      message: "account created",
    });
  });
};

export const getUserInfobyemail = (email) => {
  return new Promise((resolve, reject) => {
    const q = `SELECT id, email FROM ${process.env.DATABASE_NAME}.users WHERE email=? `;
    const values = [email];

    connection.query(q, values, (err, result) => {
      if (err) {
        reject(createError(400, "Bad Auth request"));
      } else {
        resolve(result[0]);
      }
    });
  });
};

const setBalance = (id, email) => {
  return new Promise((resolve, reject) => {
    const q = `INSERT INTO ${process.env.DATABASE_NAME}.balance(userid, useremail) VALUES(?)`;
    const values = [id, email];

    connection.query(q, [values], (err, results) => {
      // console.log(err);
      if (err) return reject(createError(500, "balance server  error"));
      else resolve(true);
    });
  });
};

// login
export const Login = (req, resp, next) => {
  const q = `SELECT id, email, password, name, verified,isadmin FROM  ${process.env.DATABASE_NAME}.users WHERE email=? `;

  const values = [req.body.email];

  connection.query(q, [values], (err, result) => {
    if (err) return next(createError(400, "Bad  Auth request"));
    if (result.length === 0)
      return next(createError("404", "Email with that Account does not exist"));

    const isPasword = bcrypt.compareSync(
      req.body.password,
      result[0]?.password
    );
    if (!isPasword) return next(createError(401, "Invalid email or password"));

    const { password, ...others } = result[0];

    const tokens = jwt.sign(
      { id: others.id, admin: others.isadmin },
      "123login"
    );
    return resp.status(200).json({ ...others, tokens });
  });
};

// verify account.
export const Verifybyemail = (req, resp, next) => {
  const q = `UPDATE ${process.env.DATABASE_NAME}.users SET verified=? WHERE email=?`;
  const data = "true";

  const values = [[data], [req.body.email]];

  connection.query(q, values, (err, result) => {
    // console.log(err);
    if (err) return next(createError(500, "verifybyemail server error"));

    return resp.status(200).json({
      success: true,
      status: 200,
      message: "account verified",
    });
  });
};
