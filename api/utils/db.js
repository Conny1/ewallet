import mysql from "mysql2";

// create the connection to database
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "mbuya",
  database: "ewallet",
});

export default connection;
