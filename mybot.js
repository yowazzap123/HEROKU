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
  if (input === "who is sam?"){
    message.channel.send("WHO IS SAM??? \n Sam is the one and true creator of the Dungeons and Dragons universe where our \n fellow adventureres go out to slay the demon king.  \n in their quest they find a mysterious man named Steven Darkblade who accompanies them into the \n magical world that SAM THE GREAT has created for them. \n on the next episide of DND, will Sam make steven gay?  Will Lews Theren ever find his mother?  \n What will Ron Shaneswarn do about that brat Dovahkinn Snow?");
  }
  if (input === "you should eat pie"){
    message.channel.send("Like sam eats fat dicks");
  }
  if(input === "what are my rights?"){
    message.channel.send("Your rights:\n 1) Freedom of religion, speech, press, assembly, and petition.\n 2) Right to keep and bear arms in order to maintain a well regulated militia.\n 3) No quartering of soldiers.\n 4) Freedom from unreasonable searches and seizures.\n 5) Right to due process of law, freedom from self-incrimination, double jeopardy.\n 6) Rights of accused persons, e.g., right to a speedy and public trial.\n 7) Right of trial by jury in civil cases.\n 8) Freedom from excessive bail, cruel and unusual punishments.\n Other rights of the people.\n 10) Powers reserved to the states.\n 11)TO HAVE THE HUMAN RIGHT TO BE THE BIGGEST FUCK UPS");
  }
  if (input === "where are my rights?"){
    message.channel.send("in the Bill of Rights faggot.")
  }
  if (input === "who is denz?"){
    message.channel.send("WHO IS DENZ??\n Denz is a talented swordsman\n Who has never let fear best him in a fight.\n Perhaps that stems from the burden he bears... The Templar's Curse. \n It is a terrible power that in the coming days, will shape his future...");
  }
  if (input === "420"){
    message.channel.send("BLAZE IT");
  }
  if (input === "who is steven?"){
    message.channel.send("Steven Darkblade: \n One of the greatest bards to ever live.  Abandoned at his father's death at age 9, he ventured off into the world to find the true meaning of love and happiness.  One day, a duel between him and a dark wizard Fenniken resulted in him being casted into space in a comet.  after 2000 years in space, his comet came crashing down into DND land and got stuck in a cone of cold somehow.  Now he must go on adventures with three other members in order to regain the EXP points he lost while in space.  Will steven ever find out his sexuality?")
  }
  if (input === "who is ron shadesworn?"){
    message.channel.send("WHO IS RON SHADESWORN?\n Only the greatest motherfucking rogue ninja assassin there is bitch!  The way he moves in the dark is like nothing you've ever seen before, mainly because you will never see him.  Those who ever see his face never lived to tell the tale, except for the group of dumbasses that follow him around.  Just don't pick a fight with him. Just because he is small in stature does not mean he's not deadly.  You would thank the Gods if he let you suck his dick instead of killing you.")
    message.channel.send("https://www.youtube.com/watch?v=Tch4v0L0GHA")
  }
  if (input === "gimme the spicy meatball"){
    message.channel.send("https://www.youtube.com/watch?v=fAm_1PGWfrE")
  }
  if (input === "grace vanderwaal"){
    message.channel.send("https://www.youtube.com/watch?v=swTki-Klk3g")
  }
  if (input === "depression"){
    message.channel.send("https://www.youtube.com/watch?v=isrF__5gdII")
  }
  if (input === "deja vu"){
    message.channel.send("https://youtu.be/SvaBaq9yuxY?t=62")
  }
  if (input === "who is lews-therin telamon?"){
    message.channel.send("WHO IS LEWS-THERIN TELAMON? \n Be careful when you say his name...  The last time someone said his name there was a series of events that lead to their death.  He was an empty vessel, roaming around the world of DND with only his improvised bow techniques and badass ranged attacks.  One day he was able to find himself again after defeating the wretched 3 cultists, and became himself again... Morair dorcha na Gàidhealtachd, a legendary spellcaster who for some reason is level 5.  He is no longer lost, but the fact that he follows three idiots may say otherwise.")
  }
  
  ////List of commands
  if (input === "/help"){
    message.channel.send("Commands: \n1) rest in spaghetti \n2) who is sam? \n3) you should eat pie \n4) what are my rights? \n5) where are my rights? \n6) who is denz? \n7) 420 \n8) who is steven? \n9) who is ron shadesworn? \n10) gimme the spicy meatball  \n11) grace vanderwaal \n12) depression \n13) deja vu \n14) who is Lews-Therin Telamon")
    message.channel.send("None of these are case sensitive")
  }
    
});

client.login(process.env.BOT_TOKEN);
 
