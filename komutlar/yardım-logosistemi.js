const WestraDiscord = require('discord.js');
const WestraClient = new WestraDiscord.Client();
const ayarlar = require('../ayarlar.json');
let prefix = ayarlar.prefix

exports.run = (client, message) => {
 const WestraEmbed = new WestraDiscord.MessageEmbed()
  .setColor(0x36393F)
 .setAuthor(`${client.user.username} | Logo Sistemi Yardım Menüsü`)
 .setDescription(`
\<:emoji_4:914183146835161149> **${prefix}arrow** \n-> Ok şeklinde logo yapar.
\<:emoji_4:914183146835161149> **${prefix}gold** \n-> Altın şeklinde logo yapar.
\<:emoji_4:914183146835161149> **${prefix}green** \n-> Yeşil şeklinde logo yapar.
\<:emoji_4:914183146835161149> **${prefix}graffiti** \n-> Graffiti şeklinde logo yapar.
`)
 .setTimestamp()
 message.channel.send(WestraEmbed)
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["logo"],
  kategori: "Bot",
  permLevel: 0
};

exports.help = {
  name: 'logosistemi',
  description: 'Bot ile ilgili bilgi verir.',
  usage: 'bilgi'
};