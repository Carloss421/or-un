const Discord = require('discord.js')
const client = new Discord.Client()
const db = require('quick.db')
exports.run = (client, message, args, member) => {
const yardım = new Discord.MessageEmbed()
  .setAuthor(`Moderasyon Yardım Menusü`, client.user.avatarURL())
  .setColor("0x36393F")
  .setThumbnail(client.user.avatarURL())
  .setDescription(`\<a:Daimond:919597429492449421> Hey! <@${message.author.id}> beni kullandığın için teşekkür ederim!\n \<:emoji_9:914183452771893268>  Prefixim: **!**\n • Dilim: **TR** :flag_tr:\n \<:emoji_9:914183452771893268> Üyelik durumu: ${db.has(`üyelikk_${message.author.id}`, "üyelik") ? `**Gold üye!**` : `**Normal üye!**`}`)
  .addField(" \<a:Daimond:919597429492449421> Kategoriler:", `> \<:emoji_9:914183452771893268> [!kullanıcı](Link): **Kullanıcı yardım menüsünü gösterir.**\n > \<:emoji_9:914183452771893268> [!moderasyon](Link): **Moderasyon yardım menüsünü gösterir.**\n > \<:emoji_9:914183452771893268> [!kayıtsistemi](Link): ** Kayıt sistemi yardım menüsünü gösterir.**\n > \<:emoji_9:914183452771893268> [!korumasistemi](Link): ** Koruma sistemi yardım menüsünü gösterir.**\n > \<:emoji_9:914183452771893268> [!logosistemi](Link): ** Logo sistemi yardım menüsünü gösterir.**\n > \<:emoji_9:914183452771893268> [!çekilişsistemi](Link): ** Çekiliş sistemi yardım menüsünü gösterir.**`)
  .addField(" \<a:Daimond:919597429492449421> Güncelleme Notları:", "**Güncelleme v0.4:** Çekiliş sistemi eklendi!")

  .addField(" \<a:Daimond:919597429492449421> Linkler:", "\<:emoji_6:914183206448799764> [Davet Et](https://discord.com/oauth2/authorize?client_id=883013030403784734&scope=bot&permissions=8) \<:emoji_6:914183206448799764> [Destek Sunucusu](https://discord.gg/HTGh746Tfr) ")
  .setImage("")
.setFooter("Lumbe Jack", message.author.avatarURL())
.setTimestamp()
  message.channel.send(yardım)
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["y", "help", "h"],
    permLevel: 0
}

exports.help = {
    name: "yardım",
    description: "westra",
    usage: "westra"
}