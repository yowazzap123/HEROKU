const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
  console.log("I am ready!");
});

client.on("message", (message) => {
  var input = message.content.toLowerCase();
  if (input === "rest in spaghetti"){
    message.channel.send("NEVER FORGETTI");
  }
});

client.login(process.env.BOT_TOKEN);
