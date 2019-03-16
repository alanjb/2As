const express = require('express');
const router = express.Router();
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const keys = require('../../config/keys');
const User = require('../../models/User');
const passport = require('passport');

//@route    GET api/user/test
//@desc     Tests user route
//@access   Public
router.get('/test', (req, res) => res.json({message: 'Users Works!'}));

// import validation
const validatorSignUpInput = require('../../validation/signup');




//@route    POST api/users/signup
//@desc     Register a user
//@access   Public (non-registered user has to be able to register)
router.post('/signup', (req,res) => {
  console.log('test for signup route')
  //if email exists - not in DB
  User.findOne({ email: req.body.email }) //use promise ().then) instead of callbacks
    .then(user => {
      if(user){ // if user means that there is a user,
        // throw a 400 error
        console.log("user exists");
        //this tells us on the backend server that we already have this email
        return res.status(400).json({email: 'Email already exists'});
      }
      else {
        console.log("new user creation successful");
        const avatar = gravatar.url(req.body.email, {
            s: '200',
            r: 'pg',
            d: 'mm'
        });
        // create new user if email doesn't exist in DB. This info will come from React Form
        //from our req, react form, we create a user object to be sent to DB
        const newUser = new User({
          name: req.body.name,
          email: req.body.email,
          avatar,
          password: req.body.password
        });
        console.log("New User Created!");
        // encrypt password
        const saltRounds = 10;
        // generate salt, either return error or the salt
        bcrypt.genSalt(saltRounds, (err, salt) => {
          bcrypt.hash(newUser.password, salt, (err, hash) => {
            // store password in DB
            if(err) throw err;
            newUser.password = hash;
            //HERE IS WHERE WE SAVE the 'DOCUMENT' object to the 'COLLECTION' in the db
             newUser
            .save() //mongodb method to save to record
            .then(user => res.json(user)) //
            .catch(err => console.log(err)); // will throw error if doesn't work
          })
        })
      }
    });
});

//@route    POST api/users/login
//@desc     Validating user for login / returning JWT token
//@access   Public
router.post('/login', (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  // Find user by email
  User.findOne({email:email})
  //use the USER schema
    .then(user => {
      if(!user) {
        // if no user then error that no
        return res.status(404).json({email: 'User not found!'});
      }
      // if user exists....continue to here
      bcrypt.compare(password, user.password)
        .then(isMatch => {
          if(isMatch){
            //res.json({msg: "Login Successful!"});
            // User match
            const payload = { id: user.id, name: user.name, avatar: user.avatar }
            //if there is a match for the email and pass
            jwt.sign(
              payload,
              keys.secretOrKey,
              {expiresIn: 3600},
              (err, token) => {
                res.json({
                  success: true,
                  token: 'Bearer '+ token
                });
              });
          }
          else{
            return res.status(400).json({password: "Password Incorrect!"});
          }
        })
    });
});

//@route    GET api/users/current
//@desc     Return current user
//@access   Private
router.get('/current', passport.authenticate('jwt', {session: false}), (req, res) => {
  res.json({
    id: req.user.id,
    name: req.user.name,
    email: req.user.email
  });
});

module.exports = router;
