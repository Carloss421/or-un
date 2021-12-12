const Discord = require('discord.js')
const client = new Discord.Client()
const db = require('quick.db')
exports.run = (client, message, args, member) => {
const yardım = new Discord.MessageEmbed()
  .setAuthor(`Moderasyon Yardım Menusü`, client.user.avatarURL())
  .setColor("0x36393F")
  .setThumbnail(client.user.avatarURL())
  .setDescription(`\Hey. <@${message.author.id}> beni kullandığın için teşekkür ederim.\n \  Prefixim: **f!**\n \ Dilim: **TR** :flag_tr:\n`)
  .addField(" \Kategoriler:", `> \ f!kullanıcı **Kullanıcı yardım menüsünü gösterir.**\n > \ f!moderasyon **Moderasyon yardım menüsünü gösterir.**\n > \ f!kayıtsistemi ** Kayıt sistemi yardım menüsünü gösterir.**\n > \ f!korumasistemi ** Koruma sistemi yardım menüsünü gösterir.**\n > \ f!logosistemi** Logo sistemi yardım menüsünü gösterir.**\n > \ f!çekilişsistemi ** Çekiliş sistemi yardım menüsünü gösterir.**\n`)
  .addField(" \Güncelleme Notları:", "**Güncelleme v0.4:** Çekiliş sistemi eklendi.")

  .setImage("")
.setFooter("Feka", message.author.avatarURL())
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