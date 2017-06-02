module.exports = function(app, passport) {

	app.get('/', (req, res) =>
    res.render('index', {
      twitterUser: req.query.source ==='myself' && req.user ? req.user.profile : {}
    })
  );

	// =====================================
	// TWITTER ROUTES =====================
	// =====================================
	// route for twitter authentication and login
	app.get('/auth/twitter', passport.authenticate('twitter'));

	// handle the callback after twitter has authenticated the user
	app.get('/auth/twitter/callback',
		passport.authenticate('twitter', {
			failureRedirect: '/#error',
      successRedirect: '/?source=myself'
		}));

};

// route middleware to make sure a user is logged in
function isLoggedIn(req, res, next) {

	// if user is authenticated in the session, carry on
	if (req.isAuthenticated())
		return next();

	// if they aren't redirect them to the home page
	res.redirect('/');
}
