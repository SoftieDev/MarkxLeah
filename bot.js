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

client.on('message', message => {
    if (message.content === 'What Time Is It?') {
    	message.reply('IT''S TIME FOR SOME LOVE!! YAYYYY!!');
  	}
});

client.on('message', message => {
    if (message.content === 'How beautiful Leah is? 10 to 10') {
    	message.reply('Let''s say 10000 / 10, Hehe <3 Leah');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
