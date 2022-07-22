const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('../ayarlar.json');
const randomizeCase = word => word.split('').map(c => Math.random() > 0.5 ? c.toUpperCase() : c.toLowerCase()).join('');

var prefix = ayarlar.prefix;




exports.run = (bot, message, args) => {
    if (args.length < 1) return message.channel.send("**Dalga geçmem için birşeyler yaz.**")
    message.channel.send(args.map(randomizeCase).join(' '));
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'botmesaj',
  description: 'Birisini etiketliyip bot ona bişey söyler.',
  usage: 'botmesaj <mesaj>'
};