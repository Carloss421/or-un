const WestraDiscord = require('discord.js');
const WestraClient = new WestraDiscord.Client();
const ayarlar = require('../ayarlar.json');
let prefix = ayarlar.prefix

exports.run = (client, message) => {
 const WestraEmbed = new WestraDiscord.MessageEmbed()
  .setColor(0x36393F)
 .setAuthor(` ${client.user.username} | Kayıt Sistemi Yardım Menüsü`)
 .setDescription(` **${prefix}alınacak-rol @rol** \n-> Kayıt edilen kişiden alınacak rolü ayarlar.
\ **${prefix}alınacak-rol sıfırla** \n-> Kayıt edilen kişiden alınacak rolü sıfırlar.
\ **${prefix}kayıt-kanal #kanal** \n-> Kayıtın yapılacağı kanalı belirlersiniz.
\ **${prefix}kayıt-kanal sıfırla** \n-> Kayıtın yapılacağı kanalı sıfırlarsınız.
\ **${prefix}kayıt-hg #kanal** \n-> Kayıt hoş geldin kanalını ayarlarsınız.
\ **${prefix}kayıt-hg sıfırla** \n-> Kayıt hoş geldin kanalını sıfırlarsınız.
\ **${prefix}kayıt-yetkili @rol** \n-> Kayıt edebilecek yetkiyi ayarlar.
\ **${prefix}kayıt-yetkili sıfırla** \n-> Kayıt edebilecek yetkiyi sıfırlar.
\ **${prefix}üye-rol @rol** \n-> Kayıt edilince verilecek erkek rolü ayarlar.
\ **${prefix}üye-rol sıfırla** \n-> Kayıt edilince verilecek erkek rolünü sıfırlar.
\ **${prefix}üye @kullanıcı isim yaş** \n-> Erkekleri kayıt etmeye yarar.
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