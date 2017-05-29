const passport = require('passport');
const TwitterStrategy = require('passport-twitter').Strategy;
const cfenv = require('cfenv');
const appEnv = cfenv.getAppEnv();

const TWITTER_CONSUMER_KEY = 'PUeIBekx12RzjU6a8tsZAsSfQ';
const TWITTER_CONSUMER_SECRET = 'zSaqZAzoXMBmNQfOqU98Il8La9lJNP7VFiJa93SJWZNjXaFy6A';
const callbackURL = process.env.CF_APP_URL || (appEnv.isLocal ? 'http://localhost:3000' : appEnv.url);

const strategyOptions = {
  consumerKey: TWITTER_CONSUMER_KEY,
  consumerSecret: TWITTER_CONSUMER_SECRET,
  callbackURL: `${callbackURL}/auth/twitter/callback`
};

const strategy = new TwitterStrategy(strategyOptions, (token, tokenSecret, profile, done) => {
  const photo = profile.photos ? profile.photos[0] : undefined;
  const userProfile = {
    handle: profile.username,
    image: photo ? photo.value.replace('_normal', '_400x400') : undefined
  };

  done(null, {
    credentials: {
      consumer_key: TWITTER_CONSUMER_KEY,
      consumer_secret: TWITTER_CONSUMER_SECRET,
      access_token_key: token,
      access_token_secret: tokenSecret
    },
    profile: userProfile
  });
});

module.exports = (app) => {
  passport.use(strategy);
  passport.serializeUser((user, next)  => next(null, user));
  passport.deserializeUser((obj, next) => next(null, obj));

  app.use(passport.initialize());
  app.use(passport.session()); // persistent login sessions
};
