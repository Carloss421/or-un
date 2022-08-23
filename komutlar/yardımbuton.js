const categorylist = require("fs").readdirSync("./komutlar/").filter(s => s !== "private");
  for (const category of categorylist) {
const Discord = require('discord.js');
const { MessageButton } = require('discord-buttons');


exports.run = async (client, message, args) => {

  const buttonDelete = new MessageButton().setStyle('red').setLabel('♻Temizle♻').setID('buttonDelete')


  let embed = new Discord.MessageEmbed()
  .setColor('WHITE')
  .setThumbnail("https://cdn.discordapp.com/attachments/999741382841344160/1000457835387301909/standard.gif")
  .setDescription(`arty development`)
  .setImage("https://cdn.discordapp.com/attachments/910809722477744161/916700535082610688/PicsArt_11-28-01.59.59.jpg")
  message.channel.send(embed, {buttons: [new MessageButton().setStyle('green').setLabel('1️⃣').setID('1'), new MessageButton().setStyle('blurple').setLabel('2️⃣').setID('2'), new MessageButton().setStyle('blurple').setLabel('3️⃣').setID('3'), buttonDelete]}).then(async function(helpMessage) {

    helpMessage.createButtonCollector(user => user.clicker.user.id == message.author.id).on('collect', async (button) => {

      if (button.id == 'buttonDelete') {

        message.delete().then(helpMessage.delete())

        button.reply.defer()

      } else if (button.id == '1') {

        embed.setTitle('Sayfa-1 arty')
        embed.setThumbnail("https://cdn.discordapp.com/attachments/910809722477744161/916700535082610688/PicsArt_11-28-01.59.59.jpg")
        embed.setDescription(`arty development`)
  
  
 
        helpMessage.edit(embed, {buttons: [new MessageButton().setStyle('green').setLabel('1️⃣').setID('1'), new MessageButton().setStyle('blurple').setLabel('2️⃣').setID('2'), new MessageButton().setStyle('blurple').setLabel('3️⃣').setID('3'),  buttonDelete]})

        button.reply.defer()

      } else if (button.id == '2') {

        embed.setTitle('Sayfa-2 arty')
        embed.setDescription(`arty development`)

        helpMessage.edit(embed, {buttons: [new MessageButton().setStyle('blurple').setLabel('1️⃣').setID('1'), new MessageButton().setStyle('green').setLabel('2️⃣').setID('2'),new MessageButton().setStyle('blurple').setLabel('3️⃣').setID('3'), buttonDelete]})

        button.reply.defer()

      } else if (button.id == '3') {

        embed.setTitle('Sayfa-3 arty')
        embed.setColor('WHITE')
        embed.setColor('WHITE')
        embed.setDescription(`arty development`)
 
        helpMessage.edit(embed, {buttons: [new MessageButton().setStyle('blurple').setLabel('1️⃣').setID('1'), new MessageButton().setStyle('blurple').setLabel('2️⃣').setID('2'), new MessageButton().setStyle('green').setLabel('3️⃣').setID('3'), buttonDelete]})

        button.reply.defer()
  
      }
    });
  });
};
}

exports.config = {
    name: "yardım1",
    guildOnly: true,
    aliases: ["yardım11"],
  };