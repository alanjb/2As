const express = require('express');
const router = express.Router();
// const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const { check, validationResult } = require('express-validator');

const User = require('../../models/User');

//@route    POST api/users/signup
//@desc     Register a user
//@access   Public (non-registered user has to be able to register for the first time)
router.post(
  '/', 
  [
    check('name', 'Name is required')
      .not()
      .isEmpty(),
    check('email', 'Email must be valid')
      .not()
      .isEmpty()
      .isEmail(),
    check('password', 'Must be a valid password')
      .isLength({min: 6})
      .isEmpty(),
    check('citizenship', 'You must have a citizenship selected')
    
  ],
  async (req,res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
      return res.status(400).json({errors: errors.array()})
    }
    const { name, email, password, citizenship } = req.body;

    try {
      let existingUser = await User.findOne({ email}); 
      if(existingUser){
        return res
          .status(400)
          .json({ errors: [{ msg: 'User already exists' }] });
      }
      const user = new User({
        name,
        email,
        citizenship,
        password
      });
      console.log("new user created - server side");
      // generate salt
      const salt = await bcrypt.genSalt(10);
      //create hashed password
      user.password = await bcrypt.hash(password, salt);
      //save user to database with newly hashed password
      await user.save();
      const payload = {
        user: {
          id: user.id //get id from mongodb
        }
      };
      //return json webtoken
      jwt.sign(
        payload, 
        config.get('jwtSecret'),
        { expiresIn: 360000 }, //remove two zeros for production
        (err, token) => {
          if(err) throw err;
          res.json({ token });
        }
      );
    }
    catch(err){
      console.log(err.message);
      res.status(500).send('Server error');
    }
  }
);

module.exports = router;
