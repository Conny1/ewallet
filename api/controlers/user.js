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
  const q = `SELECT * FROM ${process.env.DATABASE_NAME}.pendig WHERE userid=?`;
  const values = [req.params.id];

  connection.query(q, [values], (err, results) => {
    if (err) return next(createError(500, "balance server  error"));
    if (results.length === 0) return next(404, "Not found");

    return resp.status(200).json(results[0]);
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
