const WestraDiscord = require('discord.js');
const WestraClient = new WestraDiscord.Client();
const ayarlar = require('../ayarlar.json');
let prefix = ayarlar.prefix

exports.run = (client, message) => {
 const WestraEmbed = new WestraDiscord.MessageEmbed()
  .setColor(0x36393F)
 .setAuthor(`${client.user.username} | Eğlence Yardım Menüsü`)
 .setDescription(`
\ **Aduket** \n-> Etiketlediğiniz kişiye aduket çekersiniz.
\ **Akinatör** \n-> Size sorulan sorular ile bot birini tahmin eder.
\ **Düello** \n-> Etiketlediğiniz kullanıcı ile düello atarsınız.
\ **mcödül** \n-> Yazdığınız yazıyı minecraft başarımına çevirir.
\ **minecraft-sunucu-bilgi** \n->İp'sini yazdığınız sunucunun bilgilerini gösterir.
\ **Linkler** \n-> Etiketlediğiniz kişiye aduket çekersiniz.
\ **Akinatör** \n-> Size sorulan sorular ile bot birini tahmin eder.
\ **Düello** \n-> Etiketlediğiniz kullanıcı ile düello atarsınız.
\ **mcödül** \n-> Yazdığınız yazıyı minecraft başarımına çevirir.
\ **minecraft-sunucu-bilgi** \n->İp'sini yazdığınız sunucunun bilgilerini gösterir.
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
  name: 'kullanıcı',
  description: 'Bot ile ilgili bilgi verir.',
  usage: 'bilgi'
};