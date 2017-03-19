module.exports = function(app, passport, Quote) {
  app.use(require('morgan')('combined'));
  app.use(require('cookie-parser')());
  app.use(require('body-parser').urlencoded({ extended: true }));
  app.use(require('express-session')({ secret: 'keyboard cat', resave: true, saveUninitialized: true }));
  app.use(passport.initialize());
  app.use(passport.session());
  // Define routes.
  app.get('/', function(req, res) {
      res.render('welcome', { user: req.user });
    });

  app.get('/auth', function(req, res){
      res.render('auth');
    });
  // facebook
  app.get('/auth/facebook',
    passport.authenticate('facebook'));

  app.get('/auth/facebook/return',
    passport.authenticate('facebook', { failureRedirect: '/auth' }),
    function(req, res) {
      res.redirect('/');
    });

  // twitter
  app.get('/auth/twitter',
    passport.authenticate('twitter'));

  app.get('/auth/twitter/return',
    passport.authenticate('twitter', { failureRedirect: '/auth' }),
    function(req, res) {
      res.redirect('/');
    });
  // github
  app.get('/auth/github',
  passport.authenticate('github', { scope: [ 'user:email' ] }),
  function(req, res){
    // The request will be redirected to GitHub for authentication, so this
    // function will not be called.
  });
  app.get('/auth/github/callback',
    passport.authenticate('github', { failureRedirect: '/auth' }),
    function(req, res) {
      res.redirect('/');
    });

  app.get('/profile',
    require('connect-ensure-login').ensureLoggedIn(),
    function(req, res){
      res.render('profile', { user: req.user });
    });

  app.get('/quotes',
    require('connect-ensure-login').ensureLoggedIn(),
    function(req, res){
    Quote.find({}, function(err, results){
      if(err) { console.log(err); }
      res.render('quotes', { quotes: results, user: req.user});
    });
  });

  app.post('/quotes', function(req, res){
    Quote.create(req.body, function(err){
      if(err) { console.log(err); }
      res.redirect('/quotes');
    });
  });

  app.get('/logout', function(req, res){
    req.logout();
    res.redirect('/');
  });
  // END OF ROUTING...
}
