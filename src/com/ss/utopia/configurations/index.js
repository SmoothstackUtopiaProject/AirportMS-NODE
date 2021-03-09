const mysql = require("mysql");

const myDB = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "rootroot",
  database: "utopia",
  port: 3306,
});

myDB.connect((error) => {
  if(error) {
    console.error(error);
  } else {
    console.log("Good to go! Connected to DB.");
  }
});

module.exports = myDB;