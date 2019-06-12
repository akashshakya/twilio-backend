var cfg = {};

// HTTP Port to run our web application
cfg.port = process.env.PORT || 8080;

// A random string that will help generate secure one-time passwords and
// HTTP sessions
// cfg.secret = process.env.APP_SECRET;
cfg.secret = 'lalalalala';

// Your Twilio account SID and auth token, both found at:
// https://www.twilio.com/user/account
// cfg.accountSid = process.env.TWILIO_ACCOUNT_SID;
cfg.accountSid = "ACaf43a2a4042c9e4c51984fa018186db8";
// cfg.authToken = process.env.TWILIO_AUTH_TOKEN;
cfg.authToken = "06ed5537df16450290fea7d56124672c";

// A Twilio number you control
// Specify, e.g. "+16519998877"
// cfg.twilioNumber = process.env.TWILIO_NUMBER;
cfg.twilioNumber = "+918319165035";

// Your Authy production key
// cfg.authyKey = process.env.AUTHY_API_KEY;
cfg.authyKey = "hQ3CDnKw3oSW9rd0bj4RqCqi2tnRDEwX";

// MongoDB connection string - MONGO_URL is for local dev,
// MONGOLAB_URI is for the MongoLab add-on for Heroku deployment
// MONGO_PORT_27017_TCP_ADDR is for connecting to the Mongo container
// when using docker-compose
// cfg.mongoUrl = process.env.MONGOLAB_URI || process.env.MONGO_URL || process.env.MONGO_PORT_27017_TCP_ADDR;
cfg.mongoUrl = 'mongodb+srv://mongoUser:mongoPass@mongodb-node-wtgfb.mongodb.net/auth';

// Enable SMS 2FA processes
cfg.enableValidationSMS = 1;

// Export configuration object
module.exports = cfg;
