const WestraDiscord = require('discord.js');
const WestraClient = new WestraDiscord.Client();
const ayarlar = require('../ayarlar.json');
let prefix = ayarlar.prefix

exports.run = (client, message) => {
 const WestraEmbed = new WestraDiscord.MessageEmbed()
  .setColor(0x36393F)
 .setAuthor(`\<:emoji_4:914183102182588436> ${client.user.username} | Kullanıcı Yardım Menüsü`)
 .setDescription(`
\<:emoji_10:914183491892183071> **davet** \n-> Botu davet edersiniz.
\<:emoji_10:914183491892183071> **$shardbilgi** \n-> Botun shard bilgilerini gösterir.
\<:emoji_10:914183491892183071> **pp** \n-> Etiketlediğiniz kişinin avatarını gösterir.
\<:emoji_10:914183491892183071> **randompp** \n-> Botun ekli olduğu sunuculardaki her hangi birinin avatarını atar.
\<:emoji_10:914183491892183071> **öneri** \n-> Bota öneri belirtirsiniz.
\<:emoji_10:914183491892183071> **istatistik** \n-> Botun istatistiğini gösterir.
\<:emoji_10:914183491892183071> **sonmesaj** \n-> Yazdığınız son mesajı gösterir.
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