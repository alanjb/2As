const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');
//import Validators

//import Schema Models
const Profile = require('../../models/Profile');
const User = require('../../models/User');

//@route    GET api/profile/
//@desc     Tests profile route
//@access   Public
router.get('/', (req, res) => res.json({message: 'Profile Works'}));

//@route    GET api/profile/
//@desc     Get current users profile
//@access   Private
// router.get('/', passport.authenticate('jwt', {session: false}), (req, res) => {
//   const errors = {};
//
//   //find that user in  DB
//   Profile.fineOne({ user: req.user.id })
//     .then(profileFound => {
//       if(!profile){
//         errors.noProfile = 'There is no profile for this user';
//         return res.status(404).json(errors);
//       }
//       res.json(profile);
//     }
//   });
// }

//@route    POST api/profile
//@desc     Create user profile
//@access   Private
router.post('/', passport.authenticate('jwt', {session: false}), (req, res) => {
  //get profile fields from POST submission
  const profileFields = {};
  //validate if empty here
  if(profile){
    Profile.findOne(
      {
        email: email
      }
    );
  }

  profileFields.user = req.user.id;
  if(req.body.bio) profileFields.bio = req.body.bio;
  //check if typeof array
  if(req.body.skills) profileFields.skills = req.body.bio;
  if(req.body.items) profileFields.items = req.body.items;
  if(req.body.city) profileFields.city = req.body.city;
});

//@route    POST api/profile/editprofile
//@desc     Edit user profile
//@access   Private
// router.post('/editprofile', passport.authenticate('jwt', {session: false}), (req, res) => {
//   if(profile){
//     Profile.findOneAndUpdate(profile){
//       { user: req.user.id },
//       { $}
//     }
//   }
// });

module.exports = router;
