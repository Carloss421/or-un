const discord = require('discord.js')
const db = require('quick.db')

exports.run = async(client, message, args) => {

  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(` Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.`);

if(args[0] === "sıfırla") {
const sıfırlandı = new discord.MessageEmbed()
.setAuthor(client.user.username, client.user.avatarURL)  
.setTitle(`${client.user.username} | Üye rol sıfırlama komutu.`)
.setColor(0x36393F)
.setDescription(` Sunucu için ayarladığınız üye rolü başarıyla sıfırlandı!`)
.setThumbnail(client.user.avatarURL)
.setFooter(`LumberJack`)
message.channel.send(sıfırlandı)
db.delete(`erkekrol_${message.guild.id}`)
return;
}

let rol = message.mentions.roles.first();   
if (!rol) {
  const ayarlanmadı = new discord.MessageEmbed()
.setAuthor(client.user.username, client.user.avatarURL())  
.setTitle(`${client.user.username} | Üye rol ayarlama komutu.`)
.setColor(0x36393F)
.setDescription(` Ayarlayacağınız üye rolünü belirtiniz!`)
.setThumbnail(client.user.avatarURL)
.setFooter(`Feka`)
message.channel.send(ayarlanmadı)
}
db.set(`erkekrol_${message.guild.id}`, rol.id)
const ayarlandı = new discord.MessageEmbed()
.setAuthor(client.user.username, client.user.avatarURL())  
.setTitle(`${client.user.username} | Üye rol ayarlama komutu.`)
.setColor(0x36393F)
.setDescription(` Üye rolü başarıyla ${rol} olarak ayarlandı!`)
.setThumbnail(client.user.avatarURL)
.setFooter(`Feka`)
message.channel.send(ayarlandı)
  
}
exports.conf = {
  enabled: true,
  guildonly: false,
  aliases: ['üyerol', 'ürol', 'ü-rol'],
  permlevel: 0
}
exports.help = {
  name: 'üye-rol',
  description: 'üye rolünü ayarlar',
  usage: '!üye-rol @rol'
}