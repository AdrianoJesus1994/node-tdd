const route = require("express").Router();
const AuthControler = require("./app/controllers/authController");

route.post("/create-user", AuthControler.createUser);

module.exports = route;
