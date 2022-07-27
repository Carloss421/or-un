const discord = require("discord.js");

exports.run = (client, message, args) => {
let kanal = message.member.voice.channel
if(!kanal) return message.reply("Sesli kanala gir!")

        if(kanal) {
          message.channel.send(`Soran:  ${kanal.members.random().user}   Cevaplayan:  ${kanal.members.random().user}`)
        }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};
exports.help = {
  name:"çevir"
}