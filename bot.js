const Discord = require('discord.js');

const client = new Discord.Client();

client.on('message', message => {

    if (message.content.toLowerCase().startsWith('flashbot')) {

       message.channel.send('3');

       }

});

client.login(process.env.BOT_TOKEN);
