module.exports = (app) => {
    const users = require("../controllers/user.controller");
  
    app.get("/users", users.findAll);
  };
  