const sql = require("./db");
const bcrypt = require("bcrypt");
const SALT_ROUNDS = 10;

const User = function (customer) {
  this.email = customer.email;
  this.name = customer.name;
  this.password = customer.password;
  this.active = customer.active;
};

User.getAll = (result) => {
  sql.query("SELECT * FROM customers", (err, res) => {
    if (err) {
      console.log("Error", err);
      result(null, err);
      return;
    }
    console.log("customers", res);
    result(null, res);
  });
};

User.create = (newUser, result) => {
  bcrypt.hash(newUser.password, SALT_ROUNDS, (err, hash) => {
    console.log(hash);
    const objUser = {
      email: newUser.email,
      name: newUser.name,
      hash: hash,
    };
    sql.query("INSERT INTO users SET ?", objUser, (err, res) => {
      if (err) {
        console.log("error", err);
        result(err, null);
        return;
      }

      console.log("Created user", { id: res.insertId, ...newUser });
      result(null, { id: res.insertId, ...newUser });
    });
  });
};

User.login = (user, result) => {
  const { email, password } = user;

  sql.query(`SELECT * from users WHERE email = '${email}'`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      bcrypt.compare(password, res[0].hash, (err, isCorrect) => {
        if (isCorrect) {
          console.log("Found user", res[0]);
          result(null, res[0]);
          return;
        } else {
          console.log("Incorrect password");
          result({ type: "incorrect_password" }, null);
          return;
        }
      });
    } else {
      result({ type: "not_found" }, null);
    }
  });
};

module.exports = User;
