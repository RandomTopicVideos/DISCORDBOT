function SLAP() {
    var rand = [
       "https://giphy.com/gifs/angry-fight-family-guy-uqSU9IEYEKAbS",
       "https://giphy.com/gifs/gSIz6gGLhguOY",
       "https://giphy.com/gifs/sweet-penguin-penguins-mEtSQlxqBtWWA",
       "https://giphy.com/gifs/sherlock-snape-gif-kTBjwh6IWbLPy",
       "https://giphy.com/gifs/80s-retro-1980s-3XlEk2RxPS1m8",
       "https://giphy.com/gifs/movie-film-reaction-2M2RtPm8T2kOQ",

    ];
 
    return rand[Math.floor(Math.random() * rand.length)];


}
exports.run = async (clients, message, args) => {

    const personTagged = message.mentions.members.first();

        message.channel.send('`' + message.author.username + '`' + ' has slapped ' + personTagged.displayName + ' ' +
        
        SLAP())

}
exports.help = {
    name: "slap",
    description: "SLAP SOMEONE",
    example: "s!slap @silverbird"
}

exports.conf = {
    aliases: ["slap"],
    cooldown: 5
}

