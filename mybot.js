const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
  console.log("I am ready!");
});

client.on("message", (message) => {
  if (message.content.startsWith("rest in spaghetti")) or (message.content.startsWith("Rest in spaghetti")) {
    message.channel.send("NEVER FUCKING FORGETTI");
  }

});

client.login(process.env.BOT_TOKEN);
