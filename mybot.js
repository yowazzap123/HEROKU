const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
  console.log("I am ready!");
});

client.on("message", (message) => {
  if (message.content.startsWith("rest in spaghetti")) {
    message.channel.send("NEVER FORGETTI");
  }
  if (message.content.startsWith("you should eat pie")){
      message.channel.send("like Sam likes to eat dick")
  }
  if (message.content.startsWith("what are my rights?")){
      message.channel.send("Your rights:\n 1) Freedom of religion, speech, press, assembly, and petition.\n 2) Right to keep and bear arms in order to maintain a well regulated militia.\n 3) No quartering of soldiers.\n 4) Freedom from unreasonable searches and seizures.\n 5) Right to due process of law, freedom from self-incrimination, double jeopardy.\n 6) Rights of accused persons, e.g., right to a speedy and public trial.\n 7) Right of trial by jury in civil cases.\n 8) Freedom from excessive bail, cruel and unusual punishments.\n Other rights of the people.\n 10) Powers reserved to the states.\n 11)TO HAVE THE HUMAN RIGHT TO BE THE BIGGEST FUCK UPS")
  }
  if (message.content.startsWith("What are my rights?")){
      message.channel.send("Your rights:\n 1) Freedom of religion, speech, press, assembly, and petition.\n 2) Right to keep and bear arms in order to maintain a well regulated militia.\n 3) No quartering of soldiers.\n 4) Freedom from unreasonable searches and seizures.\n 5) Right to due process of law, freedom from self-incrimination, double jeopardy.\n 6) Rights of accused persons, e.g., right to a speedy and public trial.\n 7) Right of trial by jury in civil cases.\n 8) Freedom from excessive bail, cruel and unusual punishments.\n Other rights of the people.\n 10) Powers reserved to the states.\n 11)TO HAVE THE HUMAN RIGHT TO BE THE BIGGEST FUCK UPS")
  }

  if (message.content.startsWith("where are my rights")){
    message.channel.send("In the Bill of Rights faggot")
  }
  if (message.content.startsWith("Who is denz?" || "who is denz?")){
    message.channel.send("WHO IS DENZ??\n Denz is a talented swordsman\n Who has never let fear best him in a fight.\n Perhaps that stems from the burden he bears... The Templar's Curse. \n It is a terrible power that in the coming days, will shape his future...")
  }
});

client.login(process.env.BOT_TOKEN);
