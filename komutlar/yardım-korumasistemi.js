const WestraDiscord = require('discord.js');
const WestraClient = new WestraDiscord.Client();
const ayarlar = require('../ayarlar.json');
let prefix = ayarlar.prefix

exports.run = (client, message) => {
 const WestraEmbed = new WestraDiscord.MessageEmbed()
  .setColor(0x36393F)
 .setAuthor(`${client.user.username} | Koruma Sistemi Yardım Menüsü`)
 .setDescription(`
\<:emoji_8:914183385516216380> **${prefix}ban-koruma #kanal** \n-> Ban koruma sistemini açar.
\<:emoji_8:914183385516216380> **${prefix}ban-koruma-sıfırla** \n-> Ban koruma sistemini sıfırlar.
\<:emoji_8:914183385516216380> **${prefix}kanal-koruma #kanal** \n-> Kanal koruma sistemini açar.
\<:emoji_8:914183385516216380> **${prefix}kanal-koruma-sıfırla** \n-> Kanal koruma sistemini sıfırlar.
\<:emoji_8:914183385516216380> **${prefix}rol-koruma #kanal** \n-> Rol koruma sistemini açar.
\<:emoji_8:914183385516216380> **${prefix}rol-koruma-sıfırla** \n-> Rol koruma sistemini sıfırlar.
\<:emoji_8:914183385516216380> **${prefix}spam-koruma** \n-> Spam koruma sistemini açar.
\<:emoji_8:914183385516216380> **${prefix}spam-koruma-kapat** \n-> Spam koruma sistemini kapatır.`)
 .setFooter(`MaximusBoys`)
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
  name: 'korumasistemi',
  description: 'Bot ile ilgili bilgi verir.',
  usage: 'bilgi'
};