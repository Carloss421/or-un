const Discord = require('discord.js')
exports.run = (client, message, args) => {
  
    const yenilikler = new Discord.MessageEmbed()
    .setTitle("Kayser-i Rum")
    .setThumbnail(client.user.displayAvatarURL())
    .setColor("BLUE")
    .setDescription("**Youtube - Kayzer: https://www.youtube.com/@KayseriRum \n TikTok - KayzerTurco : https://www.tiktok.com/@kayzerturco \n Discord: https://discord.gg/QzgN3nJ2PG **")
    .setTimestamp()
    message.channel.send(yenilikler) 
  
};

exports.conf = {
  aliases: ['linkler']
};

exports.help = {
  name: 'linkler'
};