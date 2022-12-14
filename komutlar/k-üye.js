const discord = require('discord.js')
const db = require('quick.db')

exports.run = async(client, message, args) => {

let kanal = db.fetch(`kayıtkanal_${message.guild.id}`)
let alınacakrol = db.fetch(`alınacakrol_${message.guild.id}`)
let erkekrol = db.fetch(`erkekrol_${message.guild.id}`)
let kayıtçı = db.fetch(`kayıtçırol_${message.guild.id}`)

 
if(!message.member.roles.cache.has(kayıtçı)) return message.channel.send(`Bu komudu kullanabilmen için <@&${kayıtçı}> adlı role sahip olman lazım!`)
if(message.channel.id !== kanal) return message.channel.send(` Bu komudu sadece <#${kanal}> adlı kanalda kullanabilirsin!`)
if (!erkekrol) return message.channel.send(`Sunucuda üye rolü ayarlanmadığı için komut kullanılamaz!`)


let member = message.mentions.members.first();
if (!member) return message.channel.send(`Üye olarak kayıt edeceğin kullanıcıyı belirtmelisin!`)
let isim = args[1]
if (!isim) return message.channel.send(` İsmini belirtmelisin!`)
member.setNickname(`${isim}`)
member.roles.remove(alınacakrol)
member.roles.add(erkekrol)

const başarılı = new discord.MessageEmbed()
.setAuthor(client.user.username, client.user.avatarURL())  
.setTitle(`${client.user.username} | Üye Kayıt`)
.setColor(0x36393F)
.setDescription(` Üye olarak kayıt edilen kullanıcı: ${member} \n Üye olarak kayıt eden yetkili: <@!${message.author.id}>`)
.addField(`Kullanıcının ismi:`, `${isim}`, true)
.setThumbnail(member.avatarURL)
.setFooter(`Feka`)
message.channel.send(başarılı)
db.add(`kayıtsayı_${message.author.id}`, 1)
}
exports.conf = {
  enabled: true,
  guildonly: false,
  aliases: ['ü'],
  permlevel: 0
}
exports.help = {
  name: 'üye',
  description: 'üye olarak kayıt eder',
  usage: 'f!üye @kullanıcı isim yaş'
}