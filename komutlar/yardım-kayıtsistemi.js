const WestraDiscord = require('discord.js');
const WestraClient = new WestraDiscord.Client();
const ayarlar = require('../ayarlar.json');
let prefix = ayarlar.prefix

exports.run = (client, message) => {
 const WestraEmbed = new WestraDiscord.MessageEmbed()
  .setColor(0x36393F)
 .setAuthor(`\<:emoji_3:914183053646131200> ${client.user.username} | Kayıt Sistemi Yardım Menüsü`)
 .setDescription(` **${prefix}alınacak-rol @rol** \n-> Kayıt edilen kişiden alınacak rolü ayarlar.
\<:emoji_8:914183385516216380> **${prefix}alınacak-rol sıfırla** \n-> Kayıt edilen kişiden alınacak rolü sıfırlar.
\<:emoji_8:914183385516216380> **${prefix}kayıt-kanal #kanal** \n-> Kayıtın yapılacağı kanalı belirlersiniz.
\<:emoji_8:914183385516216380> **${prefix}kayıt-kanal sıfırla** \n-> Kayıtın yapılacağı kanalı sıfırlarsınız.
\<:emoji_8:914183385516216380> **${prefix}kayıt-hg #kanal** \n-> Kayıt hoş geldin kanalını ayarlarsınız.
\<:emoji_8:914183385516216380> **${prefix}kayıt-hg sıfırla** \n-> Kayıt hoş geldin kanalını sıfırlarsınız.
\<:emoji_8:914183385516216380> **${prefix}kayıt-yetkili @rol** \n-> Kayıt edebilecek yetkiyi ayarlar.
\<:emoji_8:914183385516216380> **${prefix}kayıt-yetkili sıfırla** \n-> Kayıt edebilecek yetkiyi sıfırlar.
\<:emoji_8:914183385516216380> **${prefix}erkek-rol @rol** \n-> Kayıt edilince verilecek erkek rolü ayarlar.
\<:emoji_8:914183385516216380> **${prefix}erkek-rol sıfırla** \n-> Kayıt edilince verilecek erkek rolünü sıfırlar.
\<:emoji_8:914183385516216380> **${prefix}kız-rol @rol** \n-> Kayıt edilince verilecek kız rolü ayarlar.
\<:emoji_8:914183385516216380> **${prefix}kız-rol sıfırla** \n-> Kayıt edilince verilecek kız rolünü sıfırlar.
\<:emoji_8:914183385516216380> **${prefix}erkek @kullanıcı isim yaş** \n-> Erkekleri kayıt etmeye yarar.
\<:emoji_8:914183385516216380> **${prefix}kız @kullanıcı isim yaş** \n-> Kızları kayıt etmeye yarar.
`)
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
  name: 'kayıtsistemi',
  description: 'Bot ile ilgili bilgi verir.',
  usage: 'bilgi'
};