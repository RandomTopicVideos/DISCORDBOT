
const discord = require("discord.js")
const client = new discord.Client()
const { Random } = require("something-random-on-discord")
const random = new Random();
exports.run = async (clients, message, args) => {
    if(message.content === "s!advice") {
        let data = await random.getAdvice()
        message.channel.send(data)
      }
  }


exports.help = {
    name: "advice",
    description: "advice"
}

exports.conf = {
    aliases: ["advice"],
    cooldown: 5
}
