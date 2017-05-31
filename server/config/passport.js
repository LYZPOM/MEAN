const passport = require('passport');
const TwitterStrategy = require('passport-twitter').Strategy;
const cfenv = require('cfenv');
const appEnv = cfenv.getAppEnv();
const TWITTER_CONSUMER_KEY = 'Gna2jDXc1MJUHr9gTHZ8Cs7cE';
const TWITTER_CONSUMER_SECRET = '	g6Jk6W8JqE7PRT4Er6TYahfC1QL4k7YTyKkgiLmIn0UC8LCXBU';

const callbackURL = process.env.CF_APP_URL || (appEnv.isLocal ? 'http://localhost:3000' : appEnv.url);
console.log(" callback URL" + appEnv.url + " twitter key " + TWITTER_CONSUMER_KEY);

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
