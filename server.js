const Discord = require("discord.js");
const tutorialBot = require("./handler/ClientBuilder.js"); // We're gonna create this soon.
const client = new tutorialBot();
const { Random } = require("something-random-on-discord")
const random = new Random();
require("./handler/module.js")(client);
require("./handler/Event.js")(client);


client.package = require("./package.json");
client.on("warn", console.warn); // This will warn you via logs if there was something wrong with your bot.
client.on("error", console.error); // This will send you an error message via logs if there was something missing with your coding.
client.login("NzM5ODQ5MDQ2NTc5MjE2Mzg1.XygcHg.drkpZpdIUBBBtwmLJqmbW-p8G-c").catch(console.error); // This token will leads to the .env file. It's safe in there.


// social media

client.on("guildMemberAdd", member => {
    const welcomeChannel = member.guild.channels.cache.find(channel => channel.id === '739007415021994044')
    welcomeChannel.send (`Welcome! ${member} to Silverbird's epic server`)
})

client.on('message', msg => {
    console.log(msg.content)
 if (msg.content === 's!yt') {
   msg.reply('Subscribe to SilverBirdRX on Youtube https://www.youtube.com/channel/UC7KtmMCclGQet2-7Xev0j5A');
   
 }
});
client.on('message', msg => {
    console.log(msg.content)
 if (msg.content === 's!roblox') {
   msg.reply('Follow SilverBirdRX on Roblox https://www.roblox.com/users/1458786328/profile');
   
 }
});
client.on('message', msg => {
    console.log(msg.content)
 if (msg.content === 's!twitch') {
   msg.reply('Follow SilverBirdRX on twitch https://www.twitch.tv/silverbirdrx');
   }
 });
 client.on('message', msg => {
  console.log(msg.content)
if (msg.content === 's!group') {
 msg.reply('Join SilverBirdRX group  https://www.roblox.com/groups/7292355/SilverBirdRX-Streaming-Platform#!/about');
 
}
});
client.on('message', msg => {
	console.log(msg.content)
if (msg.content === 's!silverbird') {
	msg.reply('https://cdn.discordapp.com/attachments/739007415021994044/740188959325421650/silver-bird-glitter-temporary-tattoo_1.jpg');
	
   }
   });
   client.on('message', msg => {
	client.user.setActivity(' https://www.twitch.tv/silverbirdrx',  {type: "STREAMING" });
   });

// poll function 
const PREFIX = "s!";

client.on('message', message=> {
	let args = message.content.substring(PREFIX.length).split(" ");
	switch(args[0]){

		case "poll" :
		const Embed = new Discord.MessageEmbed()
		.setColor(0xFF300)
		.setTitle("Init Poll")
		.setDescription("s!poll to initiate a simple yes or no poll");


		if (!args[1]){
			message.channel.send(Embed);
			break;
	   }

	   let msgArs = args.slice(1).join(" ");

	   message.channel.send(msgArs).then(messageReaction => {
		   messageReaction.react("✔️")
		   messageReaction.react("❌")
		   message.delete(3000).catch(console.error);
	   });
		  
	   break;
  }

  });
  var servers = {}
const ytdl = require('ytdl-core');
   
client.on('message', message=> {
    let args = message.content.substring(PREFIX.length).split(" ");
    switch(args[0]){

        case "play" :

        function play(connection,message){
            var server = servers[message.guild.id];

            server.dispatcher = connection.play(ytdl(server.queue[0], {filter: "audioonly"}));

            server.queue.push();

            server.dispatcher.on("finish", () =>{
                if(server.queue[0]){
                    play(connection, message);
                }else{
                    connection.disconnect();
                }
                });
        }
        
            
            
            

        if (!args[1]){
            message.channel.send("You need to provide a link");
            return;
       }
       if (!message.member.voice.channel){
        message.channel.send("You need to be in a voice channel to play a song");
        return;
       }
       if (!servers[message.guild.id]) servers[message.guild.id] = {
        queue: []
       }

       var server = servers[message.guild.id];

       server.queue.push(args[1]);

       if (!message.guild.connection) message.member.voice.channel.join().then(function(connection){
        play(connection,message)
            
        })
    

  break;
  case "skip" :
    var server = servers[message.guild.id];
    if(server.dispatcher) server.dispatcher.end();
    break;
    case "stop" :
    var server = servers[message.guild.id];
    if(message.guild.voice.connection){
        for(var i = server.queue.length -1; i >=0; i--){
            server.queue.splice(i,1);
        }
        server.dispatcher.end();
        console.log('stopped queue')
    }
    if(message.guild.connection) message.guild.voice.connection.disconnect();
        break;


    }

});

const http = require("http");
const express = require("express");
const app = express();
var server = http.createServer(app);

app.get("/", (request, response) => {
  console.log(`Ping Received.`);
  response.writeHead(200, { "Content-Type": "text/plain" });
  response.end("DISCORD BOT ");
});

const listener = server.listen(process.env.PORT, function() {
  console.log(`Your app is listening on port ` + listener.address().port);
});



const { TOKEN, CHANNEL_ID, SERVER_CHANNEL_ID } = require("./config.json");
const YouTubeNotifier = require('youtube-notification');


client.on("ready", () => {
  console.log("Watching " + CHANNEL_ID.length  + " Channels")
})

const notifier = new YouTubeNotifier({
  hubCallback: 'https://necessary-probable-slouch.glitch.me/yt',
  secret: 'JOIN_MY_SERVER_OR_DIE'
});


notifier.on('notified', data => {
  console.log('New Video');
  client.channels.cache.get(SERVER_CHANNEL_ID).send(
    `**${data.channel.name}** just uploaded a new video or stream - **${data.video.link}**`
  );
});
 
notifier.subscribe(CHANNEL_ID);

app.use("/yt", notifier.listener());
