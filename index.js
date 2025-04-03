const {Client , GatewayIntentBits,Collection, Partials } = require("discord.js");
const { JsonDatabase } = require("wio.db");
console.clear();


const client = new Client({
    intents: Object.values(GatewayIntentBits),
    partials: Object.values(Partials)
});

module.exports = client;

client.on("messageCreate", async (message) => {
    const channel = await "1137093737584013342"
    const emoji = await message.guild.emojis.cache.find(emoji => emoji.name === "saheart")
    if (message.channel.id === channel) {
        message.react(emoji)
    }

})

client.slashCommands = new Collection();

const {token} = require("./token.json");

client.login(token);

const evento = require("./handler/Events");

evento.run(client); // esse é o da cloud 

require("./handler/index")(client);
process.on('unhandRejection', (reason, promise) => {

    console.log(`🚫 Erro Detectado:\n\n` + reason, promise)

  });

  process.on('uncaughtException', (error, origin) => {

    console.log(`🚫 Erro Detectado:\n\n` + error, origin)
    
  });