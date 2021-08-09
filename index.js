const { Client, Intents , Collection} = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS,Intents.FLAGS.GUILD_MEMBERS,Intents.FLAGS.GUILD_BANS,Intents.FLAGS.GUILD_EMOJIS_AND_STICKERS,Intents.FLAGS.GUILD_INTEGRATIONS,Intents.FLAGS.GUILD_WEBHOOKS,Intents.FLAGS.GUILD_INVITES,Intents.FLAGS.GUILD_VOICE_STATES,Intents.FLAGS.GUILD_PRESENCES,Intents.FLAGS.GUILD_MESSAGES,Intents.FLAGS.GUILD_MESSAGE_REACTIONS,Intents.FLAGS.GUILD_MESSAGE_TYPING,Intents.FLAGS.DIRECT_MESSAGES,Intents.FLAGS.DIRECT_MESSAGE_REACTIONS,Intents.FLAGS.DIRECT_MESSAGE_TYPING] });
const fs = require("fs");
const prefix = "!";

client.komutlar = new Collection(); 
client.alternatifler = new Collection();

["command"].forEach(handler => {
  require(`./ardademrbotunkalbi/komut`)(client);
}); //this is for command loading in the handler file, one fireing for each cmd

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.channels.cache.get("874062459303002152").send("hazir");
});

client.on("messageCreate", async message => {

  if (message.author.bot) return; // if the message  author is a bot, return aka ignore the inputs
  if (!message.guild) return; //if the message is not in a guild (aka in dms), return aka ignore the inputs

  if (!message.content.startsWith(prefix) && message.content.startsWith(client.user.id)) return message.reply(`My Prefix is: **\`${prefix}\`**, type \`${prefix}help\` for more information!`); //if the messages is not a command and someone tags the bot, then send an info msg
  if (!message.content.startsWith(prefix)) return; //if the message does not starts with the prefix, return, so only commands are fired!

  const args = message.content.slice(prefix.length).trim().split(/ +/g); //creating the argumest (each space == 1 arg)
  const cmd = args.shift().toLowerCase(); //creating the cmd argument by shifting the args by 1

  if (cmd.length === 0) return; //if no cmd, then return

  var command = client.komutlar.get(cmd); //get the command from the collection
  if (!command) command = client.komutlar.get(client.aliases.get(cmd)); //if the command does not exist, try to get it by his alias


  if (command) //if the command is now valid
  {
    try {
      command.çalıştır(client, message, args, message.author, args.join(" "), prefix)
    } catch (error) {
      console.log(error)
    }
  } else //if the command is not found send an info msg
  return message.reply(`Böyle bir komutum yok  **\`${prefix}yardım\`** yaz ve bilgi al!`)
    

});

client.login("ODQ1NDI4MDIyMTgxMzYzNzMz.YKg0Mw.cWFQbU2YMYYiO3c_fyYChND7UL4")

