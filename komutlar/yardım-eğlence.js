const WestraDiscord = require('discord.js');
const WestraClient = new WestraDiscord.Client();
const ayarlar = require('../ayarlar.json');
let prefix = ayarlar.prefix

exports.run = (client, message) => {
 const WestraEmbed = new WestraDiscord.MessageEmbed()
  .setColor(0x36393F)
 .setAuthor(`${client.user.username} | Eğlence Yardım Menüsü`)
 .setDescription(`
\ **aduket** \n-> Etiketlediğiniz kişiye aduket çekersiniz.
\ **akinatör** \n-> Size sorulan sorular ile bot birini tahmin eder.
\ **düello** \n-> Etiketlediğiniz kullanıcı ile düello atarsınız.
\ **mcödül** \n-> Yazdığınız yazıyı minecraft başarımına çevirir.
\ **minecraft-sunucu-bilgi** \n->İp'sini yazdığınız sunucunun bilgilerini gösterir.
\ **yazan kazanır** \n-> Botun yazdığı kelimeyi ilk yazan kazanır.
\ **balık tut** \n-> Balık tutarsınız.
\ **slot** \n-> Slot oyununu oynarsınız.
\ **ejderha Yazı** \n-> Yazdığınız yazıyı ejderha yazısına çevirir.
\ **yazı tura** \n->Yazı Tura oynarsınız.
\ **espiri** \n-> Bot size espriler yapar.
\ **düello** \n-> Etiketlediğiniz kişinin ağzından mesaj yazarsınız.
\ **fal bak** \n-> Fal bakarsınız.
\ **doğum günü** \n->Etiketlediğiniz kişinin doğum gününü kutlarsınız.
\ **kapak laf** \n-> Bot size kapak laflar söyler.
\ **kasa aç** \n-> Kasa açarsınız.
\ **steam store** \n-> Steam'dan oyunlara bakarsınız.
\ **mc skin** \n-> Arattığınız minecraft skinine bakarsınız.
\ **çark** \n->Çark çevirirsiniz.
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
  name: 'eğlencesistemi',
  description: 'Bot ile ilgili bilgi verir.',
  usage: 'bilgi'
};