const Discord = require('discord.js');

exports.run = (client, message, args) => {
 let mesaj = args.slice(0).join(' ');
if (mesaj.length < 1) return message.reply('bişey yaz moruq.');
   const yaz = new Discord.MessageEmbed()
      .setColor('#fff000')
      .addField(`Mesajın Moruq`, `${mesaj}`)
    return message.channel.sendEmbed(yaz);
};
 exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['eyaz'],
  permLevel: 0
};

exports.help = {
  name: 'embedyaz',
  description: '',
  usage: 'embedyaz'
};