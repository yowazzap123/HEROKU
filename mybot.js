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
  if (input === "who is ron shanesworn?"){
    message.channel.send("https://www.youtube.com/watch?v=-TcLxlkc2pA")
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
  
  ////List of commands
  if (input === "/help"){
    message.channel.send("Commands: \n1) rest in spaghetti \n2) who is sam? \n3) you should eat pie \n4) what are my rights? \n5) where are my rights? \n6) who is denz? \n7) 420 \n8) who is steven? \n9) who is ron shanesworn? \n10) gimme the spicy meatball  \n11) grace vanderwaal \n12) depression \n13) deja vu")
  }
    
});

client.login(process.env.BOT_TOKEN);
 
