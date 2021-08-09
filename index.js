const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.channels.cache.get("874062459303002152").send("hazir");
});

client.on("messageDelete",message=> {
  console.log(message)
});

client.login('ODQ1NDI4MDIyMTgxMzYzNzMz.YKg0Mw.cWFQbU2YMYYiO3c_fyYChND7UL4');
