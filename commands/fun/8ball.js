const { MessageEmbed } = require('discord.js')
    exports.run = async (clients, message, args) => {
if (!args[2]) return message.reply("Plase ask a full question!");
let replies = [
  `It is certain.`,
  `It is decidedly so.`,
  `Without a doubt.`,
  "Yes - definitely.",
  "You may rely on it.",
  "As I see it, yes.",
  "Most likely.",
  "Outlook good.",
  "Yes.",
  "Signs point to yes.",
  "Reply hazy, try again.",
  "Ask again later.",
  "Better not tell you now.",
  "Cannot predict now.",
  "Concentrate and ask again.",
  "Don't count on it.",
  "My reply is no.",
  "My sources say no.",
  "Outlook not so good.",
  "Very doubtful.",
  "Maybe",
  "That is sure as hell.",
  "Indeed.",
  "Answer is uncertain.",
  "You are the master of your life",
  "Maybe no.",
  "We can not be never sure.",
  "As you wish.",
  "Better ask yourself.",
  "Just do it.",
  "Sorry, but this is really stupid question.",
  "Try to be usefull.",
  "Water.",
  "We can not be never sure.",
  "You already know the Answer.",
  "Very bad idea.",
  "Never.",
  "Maybe yes.",
  "Mabye no."
];
let result = Math.floor(Math.random() * replies.length);//8ball command 
let question = args.slice(1).join(" ");

let ballembed = new MessageEmbed()
  .setAuthor(message.author.tag)
  .setColor("#03f4fc")
  .addField("Question", question)
  .addField("Answer", replies[result]);

message.channel.send(ballembed);
    }

   
  exports.help = {
    name: "8ball",
    description: "predict ur future"
}

exports.conf = {
    aliases: ["8ball"],
    cooldown: 10
}
