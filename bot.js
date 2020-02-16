const { Client, Collection } = require("discord.js");
const { token } = require("./data/config.json");
const bot = new Client();
if(token == "secret") {
	console.log("Change bot token: /data/config.json")
}
["aliases", "commands"].forEach(x => bot[x] = new Collection());
["command", "event"].forEach(x => require(`./handlers/${x}`)(bot));

bot.login(token);