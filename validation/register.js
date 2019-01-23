const Validator = require('validator');
import isEmpty from './is-empty';

module.exports = function validatorRegisterInput(data) {
  let errors = {};

  if(!Validator.isLength(data.name, {min: 2, max:30})){

  }
  return{
    errors,
    isValid: isValid(errors)
  }
}
