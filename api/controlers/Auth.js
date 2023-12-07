import connection from "../utils/db.js";
import createError from "../utils/Error.js";
import bcrypt from "bcryptjs";

export const Register = (req, resp, next) => {
  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(req.body.password, salt);

  //   console.log(req.body);

  const q = `INSERT INTO ${process.env.DATABASE_NAME}.users(name, email, password, number)  VALUES(?)`;

  const values = [req.body.name, req.body.email, hash, req.body.number];

  connection.query(q, [values], (err, result) => {
    // console.log(err);
    if (err) return next(createError(400, "Bad  Auth request"));

    // email to be sent to inbox about account creation

    return resp.status(200).json({
      success: true,
      status: 200,
      message: "Account created",
    });
  });
};

// login
export const Login = (req, resp, next) => {
  const q = `SELECT email, password, verified FROM  ${process.env.DATABASE_NAME}.users WHERE email=? `;

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

    return resp.status(200).json({
      success: true,
      status: 200,
      message: "Loged in",
    });
  });
};
