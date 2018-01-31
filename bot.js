const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'Grim') {
    	message.reply('I LOVE YOU GRIM!! <3');
  	}
});

client.on('message', message => {
    if (message.content === 'Leah') {
    	message.reply('I LOVE YOU LEAH!! <3');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
