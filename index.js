const { Client, Intents , Events} = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILD_MESSAGES] });

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.channels.cache.get("874062459303002152").send("hazir");
});

client.on("messageCreate",message=> {
  console.log("123")
});
client.login("ODQ1NDI4MDIyMTgxMzYzNzMz.YKg0Mw.cWFQbU2YMYYiO3c_fyYChND7UL4")

