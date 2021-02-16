const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});

client.login('ODExMjI5MjgxODQ5MTgwMTcx.YCvKJA.ml3Otq79zuE6YVS70FJVYxGhS9Y');