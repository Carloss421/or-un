const Discord = require("discord.js");

exports.run = function(client, message, args) {
message.delete();
const FwhyCode = message.mentions.users.first();

if (!FwhyCode)

return message.reply("**Aduket Çekeceğin Kişiyi Etiketlemelisin**") .then(msg => {
    setTimeout(() => msg.delete(), 5000)
  })

const EmbedFwhyCode = new Discord.MessageEmbed()

    .setDescription(
      `${FwhyCode} ` + `**${message.author.username}** Sana Aduket Çekti Vay Yavşik Vay 😄`
    )
    var sözler = [
      "https://korkubilimi.com/wp-content/uploads/2017/12/aduket-e1514309463438.jpg",
      "https://cdn.discordapp.com/attachments/935610123869634561/1009020320277073980/images_48.jpeg",
      "https://cdn.discordapp.com/attachments/935610123869634561/1009020566323351564/images_49.jpeg",
      "https://cdn.discordapp.com/attachments/935610123869634561/1009020716663980094/de886cs-da1ac0c7-47d3-4a06-a876-9c31ad22e4f5.png",
      "https://cdn.discordapp.com/attachments/935610123869634561/1009020847027130388/images_50.jpeg",
      "https://cdn.discordapp.com/attachments/935610123869634561/1009021066527645766/dhalsim_1256975.gif"
        ]
    let sözrandom = sözler[Math.floor(Math.random() * sözler.length)]
    .setFooter(client.user.username + " Sundu", client.user.avatarURL)
    .setTimestamp();

return message.channel.send(EmbedFwhyCode);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["aduket"],
  permLevel: 0
};

exports.help = {
  name: "aduket",
  description: "FwhyCode",
  usage: "[prefix]aduket <etiket>"
};