const { User } = require("../models");

class AuthController {
  async createUser(req, res) {
    const userData = req.body;
    const user = await User.create({
      name: "Alessandro da Silva de Jesus",
      email: "asjesus1999@gmail.com",
      password_hash: "sdda4sdf4as4dfa54s46g2ag49a8494f4awdf"
    });

    res.status(201).send(user);
  }
}

module.exports = new AuthController();
