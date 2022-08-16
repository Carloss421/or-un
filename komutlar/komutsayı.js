const Discord = require('discord.js')

exports.run = (client, message, args) => {
const embed = new Discord.MessageEmbed()
.addField(`Toplam komut sayısı`,`${client.commands.size}`)
 message.channel.send(embed)
};
  exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['tk'],
    };
  exports.help = {
    name: 'toplamkomut'
  };