const Discord = require('discord.js');

exports.run = (client, message, args) => {
 let mesaj = args.slice(0).join(' ');
if (mesaj.length < 1) return message.reply('Bir şey yazmalısın.');
   const yaz = new Discord.MessageEmbed()
      .setColor('RANDOM')
      .addField(`İşte Mesajın`, `${mesaj}`)
    return message.channel.send(yaz);
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