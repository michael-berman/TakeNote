module.exports = {
  'googleAuth' : {
      'clientId' : process.env.GOOGLE_CLIENT_ID,
      'clientSecret' : process.env.GOOGLE_CLIENT_SECRET,
      'callbackUrl' :  'http://localhost:3000/api/auth/google/callback'
  }
};
