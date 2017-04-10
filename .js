const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {

console.log('Atch bot is online!')

});

client.on('message', message => {

  if(message.content === '!!hello') {

    message.channel.sendMessage('Hello, you scum of the world!', + message.author.username);
  }

});

client.on('message', message => {

if(message.content === '!!insult') {

  message.channel.sendMessage('Right, I tell you what you fat little shit, get the fuck off Discord and sort your life out - nobody even likes you and you should rethink life in general..smhh, ' + message.author.username);

}

});

client.on('message', message => {
  if(message.content === "!!help") {

    message.channel.sendMessage('Currently there are two commands: **!!hello** - get a kinda friendly greeting /  **!!insult** - to get a noice insult your way ;)')
  }

});

client.login('MzAxMDk2NTg5MjQwMzAzNjI3.C82Blg.5Cky2j9N-dITGVyfvNF399JPeCs');
