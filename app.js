const express = require('express');
const app = express();
const axios = require('axios')

const ViberBot = require('viber-bot').Bot;
const BotEvents = require('viber-bot').Events;
const PictureMessage = require('viber-bot').Message.Picture;
const TextMessage = require('viber-bot').Message.Text;



const port = process.env.PORT || 8080;
const webhookUrl = 'https://81b0bce5d8b8.ngrok.io';
// const webhookUrl = 'https://safe-meadow-75391.herokuapp.com';



console.log('2');

let init = () => {
    bot.setWebhook(webhookUrl)
    console.log('3');

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

function say(response, message) {
    response.send(new TextMessage(message));
    console.log('4');

}

// bot.onSubscribe(response => {
//     say(response, `Hi there you have subscribed to viber webhook`);
//     console.log('5');

// });
console.log('4');
// A simple regular expression to answer messages in the form of 'hi' and 'hello'.
bot.onTextMessage(/^hi|hello$/i, (message, response) => {
    console.log('6');
    try {
        axios
        .post('https://77b98ee9dfce.ngrok.io/sendToBot', {
            text: "test"
        })
        .then(res => {
            // console.log(`statusCode: ${res.status}`)
            console.log(res.data.messagePayload.text);
            // response.send(new TextMessage(`Hi there ${response.userProfile.name}. I am ${bot.name}`));
            response.send(new TextMessage(`${res.data.messagePayload.text}`));

        })
        .catch(error => {
            console.error(error);
            response.send(new TextMessage(`Hi there ${response.userProfile.name}. I am ${bot.name}`));
        })
    } catch (error) {
        console.log(error);
    }
    
        // response.send(new TextMessage(`Hi there ${response.userProfile.name}. I am ${bot.name}`));

});

bot.onTextMessage(/./, (message, response) => {
    console.log('8');

    say(response, `This is message from bot.onTextMessage`);
});


const listener = app.listen(port, () => {
    console.log('Your Viber integration server is listening on port '
        + listener.address().port);
        try {
            init();
        } catch (error) {
            console.log(error);
        }
    
   
});