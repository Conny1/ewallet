import createError from "../utils/Error.js";
import connection from "../utils/db.js";
import {
  SendMoneyEmail,
  inviteemail,
  receiveMoneyEmail,
  sendRequestMail,
} from "../utils/email.js";

// getBalance

export const getBalance = (req, resp, next) => {
  const q = `SELECT * FROM ${process.env.DATABASE_NAME}.balance WHERE userid=?`;
  const values = [req.params.id];

  connection.query(q, [values], (err, results) => {
    if (err) return next(createError(500, "balance server  error"));
    if (results.length === 0) return next(404, "Not found");

    return resp.status(200).json(results[0]);
  });
};

// pendig transactions
export const getPending = (req, resp, next) => {
  const q = `SELECT * FROM ${process.env.DATABASE_NAME}.pending`;
  const values = [req.params.id];

  connection.query(q, [values], (err, results) => {
    if (err) return next(createError(500, "balance server  error"));

    return resp.status(200).json(results);
  });
};

// setBalance amount
export const setBalance = (req, resp, next) => {
  const q = `INSERT INTO ${process.env.DATABASE_NAME}.balance(userid, useremail) VALUES(?)`;
  const values = [req.params.id, req.body.useremail];

  connection.query(q, [values], (err, results) => {
    // console.log(err);
    if (err) return next(createError(500, "balance server  error"));

    return resp.status(200).json({
      success: true,
      status: 200,
      message: "balance added",
    });
  });
};

// addPending
export const addtopending = (req, resp, next) => {
  const q = `INSERT INTO ${process.env.DATABASE_NAME}.pending(userid,amount, pending, fromid, toid) VALUES(?)`;
  const values = [
    req.body.userid,
    req.body.amount,
    req.body.pending,
    req.body.fromid,
    req.body.toid,
  ];

  connection.query(q, [values], (err, results) => {
    if (err) return next(createError(500, "pending server  error"));

    return resp.status(200).json({
      success: true,
      status: 200,
      message: "Await approval",
    });
  });
};

// subtract balance while sending
export const sendMoney = async (req, resp, next) => {
  const q = `UPDATE  ${process.env.DATABASE_NAME}.balance SET balance = balance - ? WHERE userid=?`;
  const values = [[req.body.balance], [req.body.userid]];

  try {
    await SendMoneyEmail({
      amount: req.body.balance,
      email: req.body.useremail,
    });
  } catch (error) {
    console.log(error);
  }

  connection.query(q, values, (err, results) => {
    console.log(err);
    if (err) return next(createError(500, "sendMoney server  error"));

    return resp.status(200).json({
      success: true,
      status: 200,
      message: "Transaction succesful",
    });
  });
};

// Update to complet transaction
export const receiveMoney = async (req, resp, next) => {
  const q = `UPDATE  ${process.env.DATABASE_NAME}.balance SET balance = balance + ? WHERE useremail=?`;
  const values = [[req.body.balance], [req.body.useremail]];
  // console.log(values);

  await receiveMoneyEmail({
    email: req.body.useremail,
    amount: req.body.balance,
  });
  connection.query(q, values, (err, results) => {
    if (err) return next(createError(500, "sendMoney server  error"));

    if (results) {
      const deleq = `DELETE FROM  ${process.env.DATABASE_NAME}.pending WHERE id=?`;

      connection.query(deleq, [req.body.pendingid], (err, results) => {
        if (err) return next(createError(500, "deletion server error"));

        return resp.status(200).json({
          success: true,
          status: 200,
          message: "Transaction succesful",
        });
      });
    }
  });
};

// users pending transactions
export const getPendingtransactions = (req, resp, next) => {
  const q = `SELECT * FROM ${process.env.DATABASE_NAME}.pending WHERE userid=?`;
  const values = [req.params.id];

  connection.query(q, [values], (err, results) => {
    if (err) return next(createError(500, "balance server  error"));

    return resp.status(200).json(results);
  });
};

// request payment
export const requestmoney = async (req, resp, next) => {
  const details = {
    amount: req.body.amount,
    email: req.body.email,
    receiveremail: req.body.receiveremail,
  };

  // console.log(details);

  try {
    await sendRequestMail(details);

    resp.status(200).json({
      success: true,
      status: 200,
      message: "Email sent",
    });
  } catch (error) {
    next(createError(500, "request server error"));
  }
};

export const adminadusers = async (req, resp, next) => {
  const details = {
    email: req.body.email,
  };

  try {
    await inviteemail(details);

    resp.status(200).json({
      success: true,
      status: 200,
      message: "Email sent",
    });
  } catch (error) {
    next(createError(500, "request server error"));
  }
};
