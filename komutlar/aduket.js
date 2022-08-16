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
    .setImage(
      "https://korkubilimi.com/wp-content/uploads/2017/12/aduket-e1514309463438.jpg"
    ) 
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
