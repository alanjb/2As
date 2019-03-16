//successful sign in
//username and authToken are passed into this action definition
export const setSignIn = (username, authToken) => (
{
   type: 'SIGN_IN',  //compulsory key!
   user: username,
   authToken: authToken
});
