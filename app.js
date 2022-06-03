const Discord = require("discord.js"); // discord.js node module stored within a variable.

const { config } = require("./config.json"); // access token/password from an external json file

const Client = new Discord.Client({
  intents: ["GUILDS", "GUILD_MESSAGES", "DIRECT_MESSAGES", "GUILD_MEMBERS"],
  partials: ["CHANNEL", "GUILD_MEMBER", "MESSAGE", "REACTION", "USER"],
});

// To check whether the bot is online or not
Client.on("ready", (client) => {
  console.log(client.user.tag + " is now online!");
});

Client.on("messageCreate", (message) => {
  let userInput = message.content.toLowerCase();

  if (message.author.bot == false && userInput == "!hey") {
    message.reply("hi there!");
  }
});

Client.on("guildMemberAdd", (guildMember) => {
  if (guildMember.user.bot == false) {
    guildMember.send("Welcome to the server!");
  }

  guildMember.guild.channels
    .fetch("981855455204749313")
    .then((channel) =>
      channel.send("Welcome to the server! <@" + guildMember.id + ">")
    )
    .catch(console.error);

  guildMember.guild.channels
    .fetch("982141116071698442")
    .then((channel) =>
      channel.send(
        guildMember.user.tag +
          " Joined this server. Date & Time " +
          new Date(guildMember.joinedTimestamp)
      )
    )
    .catch(console.error);
});

// // guildMember.guild.channels.fetch().then(channels=>console.log(channels)).catch(console.error);
// // });

Client.login(config);

//  text channel ID: 981855455204749313
//  admin channel ID: 982141116071698442
