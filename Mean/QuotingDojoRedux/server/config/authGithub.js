var GitHubStrategy = require('passport-github2').Strategy;

module.exports = function(app, passport) {
  passport.use(new GitHubStrategy({
      clientID: 'bff9c36c657cce825c49',
      clientSecret: 'e53f063bd98774d69d180813882d043b0ec923e7',
      callbackURL: `http://localhost:${port}/auth/github/callback`
    },
    function(accessToken, refreshToken, profile, done) {
      // asynchronous verification, for effect...
      process.nextTick(function () {

        return done(null, profile);
      });
    }
  ));
}
