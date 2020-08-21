
const discord = require("discord.js")
const client = new discord.Client()
const { Random } = require("something-random-on-discord")
const random = new Random();
exports.run = async (clients, message, args) => {
  if(message.content === "s!meme2") {
    let data = await random.getMeme()
    message.channel.send(data)
  }
}


exports.help = {
    name: "meme2",
    description: "laugh"
}

exports.conf = {
    aliases: ["meme"],
    cooldown: 5
}
