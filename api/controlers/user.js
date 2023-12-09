import createError from "../utils/Error.js";
import connection from "../utils/db.js";

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
  const q = `SELECT * FROM ${process.env.DATABASE_NAME}.pending WHERE userid=?`;
  const values = [req.params.id];

  connection.query(q, [values], (err, results) => {
    if (err) return next(createError(500, "balance server  error"));

    return resp.status(200).json(results);
  });
};

// setBalance amount
export const setBalance = (req, resp, next) => {
  const q = `INSERT INTO ${process.env.DATABASE_NAME}.balance(userid) VALUES(?)`;
  const values = [req.params.id];

  connection.query(q, [values], (err, results) => {
    console.log(err);
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
    // console.log(err);
    if (err) return next(createError(500, "pending server  error"));

    return resp.status(200).json({
      success: true,
      status: 200,
      message: "Await approval",
    });
  });
};

// subtract balance while sending
export const sendMoney = (req, resp, next) => {
  const q = `UPDATE  ${process.env.DATABASE_NAME}.balance SET balance = balance - ? WHERE userid=?`;
  const values = [[req.body.balance], [req.body.userid]];

  connection.query(q, values, (err, results) => {
    if (err) return next(createError(500, "sendMoney server  error"));

    return resp.status(200).json({
      success: true,
      status: 200,
      message: "Transaction succesful",
    });
  });
};
