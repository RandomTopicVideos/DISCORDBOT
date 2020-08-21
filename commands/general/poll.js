const Discord = require("discord.js");

     

  exports.help = {
    name: "poll",
    description: "Make a poll",
    usage: "s!poll <Question>",
    example: "s!poll IS SILVERBIRD COOL?"
  };
  
  exports.conf = {
    aliases: ["poll"],
    cooldown: 5 // This number is a seconds, not a milliseconds.
    // 1 = 1 seconds.
  };

  