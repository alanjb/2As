const express = require('express');
const router = express.Router();
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
//load User model from models
const User = require('../../models/User');

//@route    GET api/user/test
//@desc     Tests user route
//@access   Public
router.get('/test', (req, res) => res.json({message: 'User Works'}));

//post is a METHOD to send data to a server to create/update source
//use res when you need to provide a res about server complications

//@route    GET api/register/test
//@desc     Tests register route
//@access   Public
router.post('/register', (req,res) => {
  User.findOne({email: req.body.email})
    .then(user => {
      if(user){
        return res.status(400).json({email: "Email already exists" });
      }
      else{
        const avatar = gravatar.url(req.body.email, {
            s: '200',
            r: 'pg',
            d: 'mm'
        });
        // create new user if email doesn't exist in DB. This info will come from React Form
        const newUser = new User({
          name: res.body.name,
          email: res.body.email,
          avatar,
          password: res.body.password
        });
        // encrypt password
        const saltRounds = 10;
        //generate salt, either return error or the salt
        bcrpyt.genSalt(saltRounds,(err, salt) => {
          bcrypt.hash(newUser.password, salt, (err, hash) => {
            // store password in DB
            if(err) throw err;
            newUser.password = hash;
            newUser
            .save() //mongodb method to save to record
            .then(user => res.json(user)) //
            .catch(err => console.log(err)); // will throw error if doesn't work
          })
        })
      }
    })
    .catch(err => console.log(err))
});

module.exports = router;
