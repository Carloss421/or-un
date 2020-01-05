const Discord = require('discord.js');
const db = require('quick.db')
const Jimp = require('jimp')

exports.run = (client, message, args) => { 

 var user = message.mentions.users.first() || message.author; 
  
const embed = new Discord.RichEmbed()
.setAuthor("SepuLtura", client.user.avatarURL)
.setTitle("SepuLtura")
.setURL("https://discord.gg/kekHJ2Q")
.setDescription("Botu kendi sunucuna davet edebilirsin :)")
.setColor("BLUE")
.setTimestamp()
.setFooter("© SepuLtura", client.user.avatarURL)
.addField("Davet Linki", "YOK NAH ")
message.channel.send(embed)
};
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: ['invite'], 
  permLevel: 0
};

exports.help = {
  name: 'davet',
  description: 'taslak', 
  usage: 'sayac-hg-msg'
};