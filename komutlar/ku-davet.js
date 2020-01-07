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
.addField("Davet Linki", "https://discordapp.com/oauth2/authorize?client_id=663278603936727121&scope=bot&permissions=2080898303")
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