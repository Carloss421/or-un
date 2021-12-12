const WestraDiscord = require('discord.js');
const WestraClient = new WestraDiscord.Client();
const ayarlar = require('../ayarlar.json');
let prefix = ayarlar.prefix

exports.run = (client, message) => {
 const WestraEmbed = new WestraDiscord.MessageEmbed()
  .setColor(0x36393F)
 .setAuthor(`${client.user.username} | Moderasyon Yardım Menüsü`)
 .setDescription(`
\<a:Zil:919596837357379584> **${prefix}mod-log #kanal** \n-> Mod-log ayarlar.
\<a:Zil:919596837357379584> **${prefix}mod-log sıfırla** \n-> Mod-log sıfırlar.
\<a:Zil:919596837357379584> **${prefix}bansay** \n-> Sunucuda kaç banlanan üye olduğunu gösterir.
\<a:Zil:919596837357379584> **${prefix}ban @kullanıcı** \n-> Etiketlediğiniz kullanıcıyı banlar.
\<a:Zil:919596837357379584> **${prefix}küfürengel** \n-> Küfür engel açar/kapatır.
\<a:Zil:919596837357379584> **${prefix}küfürlog #kanal** \n-> Küfür-log ayarlar.
\<a:Zil:919596837357379584> **${prefix}reklamengel** \n-> Reklam engel açar/kapatır.
\<a:Zil:919596837357379584> **${prefix}reklamlog #kanal** \n-> Reklam-log ayarlar.
\<a:Zil:919596837357379584> **${prefix}sa-as aç** \n-> SA-AS sistemini açar.
\<a:Zil:919596837357379584> **${prefix}sa-as kapat** \n-> SA-AS sistemini kapatır.
\<a:Zil:919596837357379584> **${prefix}sil** \n-> Yazdığınız miktar kadar mesaj siler.
\<a:Zil:919596837357379584> **${prefix}say** \n-> Sunucu bilgilerini gösterir.
\<a:Zil:919596837357379584> **${prefix}oylama** \n-> Oylama yapar.
\<a:Zil:919596837357379584> **${prefix}otorol-ayarla @rol #kanal** \n-> Otorol ayarlar.
\<a:Zil:919596837357379584> **${prefix}otorol-sıfırla** \n-> Otorol sıfırlar.
\<a:Zil:919596837357379584> **${prefix}otorol-mesaj-ayarla** \n-> Otorol mesajı ayarlar.
\<a:Zil:919596837357379584> **${prefix}otorol-mesaj-sıfırla** \n-> Otorol mesajı sıfırlar.
`)
 .setTimestamp()
 message.channel.send(WestraEmbed)
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['mod'],
  kategori: "Bot",
  permLevel: 0
};

exports.help = {
  name: 'moderasyon',
  description: 'Bot ile ilgili bilgi verir.',
  usage: 'bilgi'
};