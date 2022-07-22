const Discord = require('discord.js');
exports.run = (client, message, args) => {   
  

 let mesaj = args.slice(0).join(' ');
 let member = message.mentions.members.first();
 let body = 'https://mc-heads.net/body/' + mesaj
 if (mesaj.length < 1) return message.channel.send('skin adınıda yazı ver')
 if (mesaj == member) {
   message.channel.send('Bir Skini Adını Belirt, Örn: !mcskin Niyazi_Ciftci')
 } else {
 const egsecode = new Discord.MessageEmbed()
   .setColor('RANDOM')
   .setImage(body)
    .setFooter("TR'2")

 message.channel.send(egsecode);
 }
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["mccilt"],
  permLevel: 0
};

exports.help = {
  name: "mcskin"
};
//EgSa v12 Eğlence Botu Altyapısı
//Çalınması Yasaktır!!
//iyi Kullanmlar!
