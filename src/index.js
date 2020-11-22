import Discord from 'discord.js';
import 'dotenv/config';

const client = new Discord.Client();
client.on('ready', ()=> {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if(msg.content === 'ping') {
    msg.channel.send(`${msg.author.toString()}, pong`);
    console.log(msg.author.toString());
  }
});

client.login(process.env.TOKEN);