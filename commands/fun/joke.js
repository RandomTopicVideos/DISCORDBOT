
const discord = require("discord.js")
const client = new discord.Client()
const { Random } = require("something-random-on-discord")
const random = new Random();
exports.run = async (clients, message, args) => {
  if(message.content === "s!joke") {
    let data = await random.getJoke()
    message.channel.send(data)
  }
}


exports.help = {
    name: "joke",
    description: "laugh"
}

exports.conf = {
    aliases: ["jokes"],
    cooldown: 5
}
