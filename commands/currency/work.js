const Discord = require("discord.js");
const db = require("quick.db");
const ms = require("parse-ms");

exports.run = async (client, message, args) => {
    
    const result = Math.floor(Math.random() * 10 * 10 *2);
    const amount = Math.floor(Math.random() * 10 *10 * 2);

    let cooldown = 15000; // 25 Seconds.
    let pad_zero = num => (num < 10 ? '0' : '') + num;
    let lastGamble = await db.get(`lastGamble.${message.author.id}`);

    if (lastGamble !== null && cooldown - (Date.now() - lastGamble) > 0) {
        let timeObj = ms(cooldown - (Date.now() - lastGamble));
        let second = pad_zero(timeObj.seconds).padStart(2, "0");
        return message.channel.send(`You are tired ${message.author} You need to wait **${second}** second(s) before you can work again.`);
    }

    // 50:50
    if (result < 5) {
        await db.set(`lastGamble.${message.author.name}`, Date.now());
        await db.add(`account.${message.author.id}.balance`, amount);
        return message.channel.send(`NICE ${message.author},  You earned $${amount}. `);
    } else if (result > 5) {
        await db.set(`lastGamble.${message.author.id}`, Date.now());
        await db.add(`account.${message.author.id}.balance`, amount);
        return message.channel.send(`Woohoo ${message.author}! You earned $${amount}! `);
    }
}

exports.help = {
    name: "work",
    description: "An efficient to get money.",
    usage: "work ",
    example: "work"
}

exports.conf = {
    aliases: ["working"],
    cooldown: 5
}
