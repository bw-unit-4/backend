const router = require("express").Router();
const Users = require("./users-model.js");
const jwt = require("jsonwebtoken");
const { checkUserExists } = require("./users-middleware");
const bcrypt = require('bcryptjs');


router.get("/plants", checkUserExists, (req, res, next) => {
    const token = req.headers.authorization;
    const loggedUser = jwt.decode(token);
    Users.getUserPlants(loggedUser.subject)
      .then((selectedUser) => {
        res.status(200).json(selectedUser);
      })
      .catch(next);
  });

  router.get("/", (req, res, next) => {
    const token = req.headers.authorization;
    const id = jwt.decode(token);
    Users.getById(id.subject)
      .then((currentUser) => {
        res.status(200).json(currentUser);
      })
      .catch(next);
  });
  
  router.put("/", checkUserExists, (req, res, next) => {
    const token = req.headers.authorization;
    const id = jwt.decode(token);

    const user = req.body;
    const rounds = process.env.BCRYPT_ROUNDS || 8;
    const hash = bcrypt.hashSync(user.password, rounds);
    user.password = hash;

    Users.update(id.subject, user)
      .then(() => {
        res.status(200).json({ message: "User info updated" });
      })
      .catch(() => {
        res.status(500).json({ message: "Invalid change." });
      });
  });





module.exports = router;