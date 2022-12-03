const Discord = require('discord.js')
const client = new Discord.Client()
const db = require('quick.db')
exports.run = (client, message, args, member) => {
const yardım = new Discord.MessageEmbed()
  .setAuthor(`Kayser-i Rum Yardım Menusü`, client.user.avatarURL())
  .setColor("0x36393F")
  .setThumbnail(client.user.avatarURL())
  .setDescription(`\Hey. <@${message.author.id}> beni kullandığın için teşekkür ederim.\n \  Prefixim: **!**\n \ Dilim: **TR** :flag_tr:\n`)
  .addField(" \Kategoriler:", `> \ !kullanıcı **Kullanıcı yardım menüsünü gösterir.**\n > \ !moderasyon **Moderasyon yardım menüsünü gösterir.**\n > \ !kayıtsistemi ** Kayıt sistemi yardım menüsünü gösterir.**\n> \ !eğlencesistemi ** Eğlence sistemi yardım menüsünü gösterir.**\n > \ !korumasistemi ** Koruma sistemi yardım menüsünü gösterir.**\n > \ !logosistemi** Logo sistemi yardım menüsünü gösterir.**\n > \ !çekilişsistemi ** Çekiliş sistemi yardım menüsünü gösterir.**\n`)
  .addField(" \Güncelleme Notları:", "**Güncelleme v0.5:** 23 Komutluk bir güncelleme ile birikte eğlence komutları geldi.")

  .setImage("")
.setFooter("Kayser-i Rum", message.author.avatarURL())
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