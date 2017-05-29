// Get dependencies
const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');

// Get our API routes
const api = require('./server/routes/api');


const pick = require('object.pick');
const passport = require('passport');

const twitterHelper = require('./server/helpers/twitter-helper');
const personalityHelper = require('./server/helpers/personality-insights');
const profileFromTweets = personalityHelper.profileFromTweets;
const profileFromText = personalityHelper.profileFromText;

const app = express();


// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist')));

//Set our api routes
app.use('/api', api);

// Catch all other routes and return the index file
// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, 'dist/index.html'));
// });

console.log(" display " + JSON.stringify(process.env));
if (process.env.VCAP_APPLICATION) {
    require('./server/config/security')(app);
  }
  require('./server/config/passport')(app);


// personality profile from text
app.post('/api/profile/text', (req, res, next) =>
  profileFromText(req.body)
    .then(res.json.bind(res))
    .catch(next)
);

// personality profile from tweets
app.post('/api/profile/twitter', (req, res, next) => {
  if (!req.body.userId) {
    return next({ code: 400, error: 'Missing required parameters: userId' });
  }

  const user = {
    credentials : req.user ? req.user.credentials : null,
    userId: req.body.userId,
  };

  return twitterHelper.getTweets(user)
    .then(profileFromTweets(req.body))
    .then(res.json.bind(res))
    .catch(next);
});

// twitter oauth
app.get('/auth/twitter', passport.authenticate('twitter'));
app.get('/auth/twitter/callback', passport.authenticate('twitter', {
  failureRedirect: '/#error',
  successRedirect: '/?source=myself'
}));

// home page
app.get('/', (req, res) =>
  res.render('index', {
    twitterUser: req.query.source ==='myself' && req.user ? req.user.profile : {},
    showTwitterButton: !!process.env.TWITTER_CONSUMER_KEY
  })
);
/**
 * Get port from environment and store in Express.
 */
const port = process.env.PORT || '3000';
app.set('port', port);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, () => console.log(`API running on localhost:${port}`));
