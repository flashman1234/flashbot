const Discord = require('discord.js');

const client = new Discord.Client();

 

client.on('ready', () => {

    console.log('I am ready!');

});

 

client.on('message', message => {

    if (message.content.startswith('flashbot')) {

       message.reply('3');

       }

});

 

// THIS  MUST  BE  THIS  WAY

client.login("Nzg5NzcyOTE1OTUxNzk2MjY0.X927WA.vDOaAHbLH6PKzS5U4ANiD4LYUiE")
 //process.env.BOT_TOKEN);//BOT_TOKEN is the Client Secre
