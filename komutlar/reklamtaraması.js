const discord = require('discord.js'); //modüller

exports.run = async (client, message, args) => {
if (!message.member.hasPermission('BAN_MEMBERS')) return message.channel.send(`Bu komutu kullanabilmek için **Üyeleri Banla** iznine sahip olmalısın!`);
 const memberss = message.guild.members.cache.filter(member => member.user.username && /(discord|http|.com|.net|.org|invite|İnstagram|Facebook|watch|Youtube|.xyz|facebook|instagram)/g.test(member.user.username));
  const embed = new discord.MessageEmbed()
  .addField('Kullanıcı Adı Reklam İçeren Kullanıcılar', memberss.map(member => `${member} = ${member.user.username}`).join("\n") || "Kimsenin kullanıcı adı reklam içermiyor.")
  .setColor("RANDOM")
  message.channel.send({embed})
}
exports.conf = {
    enabled: true, //kullanıma açık mı değil mi
    guildOnly: true, //dmde kullanıma açık mı değil mi
    aliases: [], //kısayollar
    permLevel: 0 //perm level mainde karşıliklar yazar
  };
 
  exports.help = {
    name: "reklamtara", //komutu çalıştıracak olan kelime
    description: "",//açıklama (isteğe bağlı)
    usage: ""//kullanım (isteğe bağlı)
  };