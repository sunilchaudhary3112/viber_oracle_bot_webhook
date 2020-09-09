const ViberBot = require('viber-bot').Bot;
const BotEvents = require('viber-bot').Events;
const PictureMessage = require('viber-bot').Message.Picture;

const TextMessage = require('viber-bot').Message.Text;
const express = require('express');
const app = express();

const port = process.env.PORT || 8080;
const webhookUrl = 'https://03d1d4e5186c.ngrok.io';

let init = () => {
    bot.setWebhook(webhookUrl)
};

// Creating the bot with access token, name and avatar
const bot = new ViberBot({
    authToken: "4c1a5ba18467d068-52c15a064279601c-3844cee27176fcb3",
    name: "montyviberbot2",
    avatar: "https://i.ibb.co/X30d6TG/logo3.png",
    registerToEvents: [
        "subscribed",
        "unsubscribed",
        "conversation_started",
        "message"]
});

app.use('/', bot.middleware());

// A simple regular expression to answer messages in the form of 'hi' and 'hello'.
bot.onTextMessage(/^hi|hello$/i, (message, response) => {
    response.send(new TextMessage(`Hi there ${response.userProfile.name}. I am ${bot.name}`));
    // console.log('Got Request from Viber');
    // console.log('------message------');
    // console.log(message);
    // console.log('------response------');
    // console.log(response);
});


const listener = app.listen(port, () => {
    console.log('Your Viber integration server is listening on port '
        + listener.address().port);
    init();
});