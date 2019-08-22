const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const auth = require('../../config/middleware/auth');
const jwt = require('jsonwebtoken');
const config = require('config');
const { check, validationResult } = require('express-validator');

const User = require('../../models/User');

//@route    GET api/auth
//@desc     Test route
//@access   Public
router.get('/', auth, async(req,res) => {
    try{
        const user = await User.findById(req.user.id).select('-password');
        res.json(user);
    }
    catch (err){
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

//@route    POST api/auth
//@desc     Authenticate user and token
//@access   Public
router.post(
    '/', 
    [
      check('email', 'Email must be valid')
        .not()
        .isEmpty()
        .isEmail(),
      check('password', 'Password is required')
        .exists()
        .isEmpty(),
    ],
    async (req,res) => {
      const errors = validationResult(req);
      if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()})
      }
      const { email, password } = req.body;
  
      try {
        let existingUser = await User.findOne({ email}); 
        if(!existingUser){
            //user doesn't exist
            return res
                .status(400)
                .json({ errors: [{ msg: 'Invalid Credentials' }] });
        }

        //match password
        let isMatch = await bcrypt.compare(password, existingUser.password);
        if(!isMatch){
            return res
            .status(400)
            .json({ errors: [{ msg: 'Invalid Credentials' }] });
        }

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