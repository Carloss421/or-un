const Discord = require('discord.js')
exports.run = (client, message, args) => {
  
    const yenilikler = new Discord.MessageEmbed()
    .setTitle("Dijitalaile")
    .setThumbnail(client.user.displayAvatarURL())
    .setColor("BLUE")
    .setDescription("**Youtube - Diji: https://youtube.com/dijitalaile \n Youtube - DijiGame : https://youtube.com/dijigame \n Discord https://discord.gg/DMgPJDNTVc **")
    .setTimestamp()
    message.channel.send(yenilikler) 
  
};

exports.conf = {
  aliases: ['linkler']
};

exports.help = {
  name: 'linkler'
};