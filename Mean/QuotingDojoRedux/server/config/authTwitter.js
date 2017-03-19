var Strategy = require('passport-twitter').Strategy;

module.exports = function(app, passport) {
  passport.use(new Strategy({
      consumerKey: '5wxZZU6hDV9YprV1xtmIXkSlO',
      consumerSecret: 'AM7kwBrUwLexPuY4bCiuh7wGZ4C9oVlHN0IqWSztUxLby4Tidf',
      callbackURL: `http://localhost:${port}/auth/twitter/return`
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
