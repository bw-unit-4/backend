const router = require('express').Router();
const Users = require('../users/users-model');
const bcrypt = require('bcryptjs');
const tokenBuilder = require('./token-builder');

const { checkUsernameExists,
        checkUsernameFree,
        noMissingInformation,
        noMissingCredentials,
        checkPhoneNumberLength, 
        checkPhoneNumberFree,
        } = require('./auth-middleware');

router.post("/register", noMissingInformation, checkUsernameFree, checkPhoneNumberLength, checkPhoneNumberFree,(req, res, next) => {
    const user = req.body;
    const rounds = process.env.BCRYPT_ROUNDS || 8;
    const hash = bcrypt.hashSync(user.password, rounds);
    user.password = hash;
  
    Users.addUser(user)
      .then(addedUser => {
        res.status(201).json(addedUser);
      })
      .catch(next);
});

router.post('/login', noMissingCredentials, checkUsernameExists, (req, res, next) => {
  let { username, password } = req.body;

  Users.getBy({ username })
    .then(([user]) => {
      if (user && bcrypt.compareSync(password, user.password)) {
        const token = tokenBuilder(user)
        res.status(200).json({
          message: `welcome, ${user.username}`, 
          token
        });
      } else {
        next({ status: 401, message: "invalid credentials"})
      }
    })
    .catch(next);
  
});

router.get("/logout", (req, res, next) => {
    if (req.session.user) {
        req.session.destroy(error => {
          if (error) {
            res.status(200).json({message: "Error logging out."})
          } else {
            res.status(200).json({message: "Logged out."})
          }
        });
      } else {
        res.status(200).json({message: "There was no session to begin with."})
    }
})

module.exports = router;