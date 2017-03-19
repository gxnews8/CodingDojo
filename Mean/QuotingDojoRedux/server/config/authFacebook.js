var Strategy = require('passport-facebook').Strategy;

module.exports = function(app, passport) {
  passport.use(new Strategy({
      clientID: '784321585050489',
      clientSecret: 'f0ab34f86bc0f7fe3eda50f2fa815fba',
      callbackURL: `http://localhost:${port}/auth/facebook/return`
    },
    function(accessToken, refreshToken, profile, cb) {
      // providers.
      return cb(null, profile);
    }));
    passport.serializeUser(function(user, cb) {
      cb(null, user);
    });
    passport.deserializeUser(function(obj, cb) {
      cb(null, obj);
    });
}
