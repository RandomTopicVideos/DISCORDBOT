const fetch = require("node-superfetch");
const Discord = require("discord.js");

exports.run = async (clients, message, args) => {
    const res = await fetch.get("https://www.reddit.com/r/meme/random/.json");
  let permalink = res.body[0].data.children[0].data.permalink;
  let url = `https://reddit.com${permalink}`;
  let image = res.body[0].data.children[0].data.url;
  let title = res.body[0].data.children[0].data.title;
  let upvotes = res.body[0].data.children[0].data.ups;
  let downvotes = res.body[0].data.children[0].data.downs;
  let numComments = res.body[0].data.children[0].data.num_comments;
  const embed = new Discord.MessageEmbed()
  .setTitle(`${title}`)
  .setURL(`${url}`)
  .setImage(image)
  .setColor('RANDOM')
  .setFooter(`👍 ${upvotes} 👎 ${downvotes} 💬 ${numComments}`)
  message.channel.send(embed).catch(error => {console.log(error)})
}
  

  exports.help = {
    name: "meme",
    description: "laugh"
}

exports.conf = {
    aliases: ["meme"],
    cooldown: 10
}
