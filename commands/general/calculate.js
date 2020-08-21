const math = require('mathjs');

const Discord = require('discord.js');

exports.run = async (client, message, args) => {
        if(!args[0]) return message.channel.send('Please provide a question');

        let resp;

        try {
            resp = math.evaluate(args.join(" "))
        } catch (e) {
            return message.channel.send('Please provide a **valid** question')
        }

        const embed = new Discord.MessageEmbed()
        .setColor(0x808080)
        .setTitle('Calculator')
        .addField('Question', `\`\`\`css\n${args.join(' ')}\`\`\``)
        .addField('Answer', `\`\`\`css\n${resp}\`\`\``)

        message.channel.send(embed);

    }

    exports.help = {
        name: "cal",
        description: "do ur math hw",
        example: "s!cal 5+5",
      }
      
      exports.conf = {
        aliases: ["math"],
        cooldown: 5
      }
      