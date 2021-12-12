const WestraDiscord = require('discord.js');
const WestraClient = new WestraDiscord.Client();
const ayarlar = require('../ayarlar.json');
let Prefix = ayarlar.prefix

exports.run = (client, message) => {
 const WestraEmbed = new WestraDiscord.MessageEmbed()
  .setColor(0x36393F)
 .setAuthor(`\<a:Kupa:919597271362973746> ${client.user.username} | Çekiliş Sistemi Yardım Menüsü`)
 .setDescription(`
\<a:Star:919597047131287573> **${Prefix}çekiliş** \n-> Çekiliş başlatır.
\<a:Star:919597047131287573> **${Prefix}reroll** \n-> Çekilişi yeniden çeker.
\<a:Star:919597047131287573> **${Prefix}çekilişbitir** \n-> Çekilişi bitirir.
`)
 .setFooter(`LumberJack Bot`)
 .setTimestamp()
 message.channel.send(WestraEmbed)
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  kategori: "Bot",
  permLevel: 0
};

exports.help = {
  name: 'çekilişsistemi',
  description: 'Bot ile ilgili bilgi verir.',
  usage: 'bilgi'
};