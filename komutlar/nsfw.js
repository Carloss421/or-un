const WestraDiscord = require('discord.js');
const WestraClient = new WestraDiscord.Client();
const ayarlar = require('../ayarlar.json');
let prefix = ayarlar.prefix
let gif = `https://cdn.discordapp.com/attachments/769957882166116353/769974488670011422/standard.gif`

exports.run = (client, message) => {
  if(message.author.id !== "390162986926473216") if(message.author.id !== "488384549479251969") return message.channel.send("Çok yakında...");
 const WestraEmbed = new WestraDiscord.MessageEmbed()
  .setColor(0x36393F)
 .setAuthor(`${client.user.username} | Nsfw Sistemi Yardım Menüsü`)
 .setDescription(`
 **${prefix}anal** -> __Anal Nsfw Atar.__
 **${prefix}4k** -> __4K Nsfw Atar.__
 **${prefix}ass** -> __Ass Nsfw Atar.__
 **${prefix}pgif** -> __Pgif Nsfw Atar.w__
 **${prefix}hentai** -> __Hentai Nsfw Atar.__
 **${prefix}pussy** -> __Pussy Nsfw Atar.__
 **${prefix}thigh** -> __Thigh Nsfw Atar.__`)
 .setFooter(`LumberJack`)
 .setTimestamp()
 .setImage(gif)
 message.channel.send(WestraEmbed)
}
exports.conf = {
  enabled: false,
  guildOnly: false,
  aliases: [],
  kategori: "Bot",
  permLevel: 0
};

exports.help = {
  name: 'nsfw',
  description: 'Bot ile ilgili bilgi verir.',
  usage: 'bilgi'
};