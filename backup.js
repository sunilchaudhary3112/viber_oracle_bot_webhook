// const ngrok = require('./get_public_url');
// const ViberBot = require('viber-bot').Bot;
// const winston = require('winston');
// const toYAML = require('winston-console-formatter');
// const TextMessage = require('viber-bot').Message.Text;


// // function createLogger() {
// //     const logger =  winston.Logger({
// //         level: "debug" // We recommend using the debug level for development
// //     });

// //     logger.add(winston.transports.Console, toYAML.config());
// //     return logger;
// // }
// // const logger = createLogger();

// // Creating the bot with access token, name and avatar
// const bot = new ViberBot({
//     authToken: "4c1a5ba18467d068-52c15a064279601c-3844cee27176fcb3",
//     name: "montyviberbot2",
//     avatar: "https://i.ibb.co/X30d6TG/logo3.png"
// });



// // A simple regular expression to answer messages in the form of 'hi' and 'hello'.
// bot.onTextMessage(/^hi|hello$/i, (message, response) =>
//     response.send(new TextMessage(`Hi there ${response.userProfile.name}. I am ${bot.name}`)));

// const http = require('http');
// const port = process.env.PORT || 8080;
// return ngrok.getPublicUrl().then(publicUrl => {
//     console.log('Set the new webhook to"', publicUrl);
//     http.createServer(bot.middleware()).listen(port, () => bot.setWebhook(publicUrl));
// }).catch(error => {
//     console.log('Can not connect to ngrok server. Is it running?');
//     console.error(error);
// });