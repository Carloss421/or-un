// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // //
const categorylist = require("fs").readdirSync("./komutlar/").filter(s => s !== "private");
  for (const category of categorylist) {
const Discord = require('discord.js');
const { MessageButton } = require('discord-buttons');

// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // //

// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // //

exports.run = async (client, message, args) => {

  const buttonDelete = new MessageButton().setStyle('red').setLabel('Clear').setID('buttonDelete')

  // // // // //

  let embed = new Discord.MessageEmbed()
  .setColor('#000001')
  .setTitle('@bi Yardım menüsü')
  .addField(`Komutlar`, `Alttaki butonlara basarak tüm komutları öğrenebilirsiniz.`)
  .setDescription(`Dijitalaile - @bi`)
  message.channel.send(embed, {buttons: [new MessageButton().setStyle('green').setLabel('Kullanıcı').setID('1'), new MessageButton().setStyle('blurple').setLabel('Moderasyon').setID('2'), new MessageButton().setStyle('blurple').setLabel('Kayıt Sistemi').setID('3'),  buttonDelete]}).then(async function(helpMessage) {

    helpMessage.createButtonCollector(user => user.clicker.user.id == message.author.id).on('collect', async (button) => {

      if (button.id == 'buttonDelete') {

        message.delete().then(helpMessage.delete())

        button.reply.defer()

      } else if (button.id == '1') {

        embed.setTitle('Sayfa 1')
        embed.setDescription(`Sayfa 1`)
        helpMessage.edit(embed, {buttons: [new MessageButton().setStyle('green').setLabel('Kullanıcı').setID('1'), new MessageButton().setStyle('blurple').setLabel('Moderasyon').setID('2'), new MessageButton().setStyle('blurple').setLabel('Kayıt Sistemi').setID('3'),  buttonDelete]})

        button.reply.defer()

      } else if (button.id == '2') {

        embed.setTitle('Sayfa 2')
        embed.setDescription(`Sayfa 2`)
        helpMessage.edit(embed, {buttons: [new MessageButton().setStyle('green').setLabel('Kullanıcı').setID('1'), new MessageButton().setStyle('blurple').setLabel('Moderasyon').setID('2'), new MessageButton().setStyle('blurple').setLabel('Kayıt Sistemi').setID('3'),  buttonDelete]})

        button.reply.defer()

      } else if (button.id == '3') {

        embed.setTitle('Sayfa 3')
        embed.setDescription(`Sayfa 3`)
        helpMessage.edit(embed, {buttons: [new MessageButton().setStyle('green').setLabel('Kullanıcı').setID('1'), new MessageButton().setStyle('blurple').setLabel('Moderasyon').setID('2'), new MessageButton().setStyle('blurple').setLabel('Kayıt Sistemi').setID('3'),  buttonDelete]})

        button.reply.defer()
      } else if (button.id == '4') {

        embed.setTitle('Sayfa 4')
        embed.setDescription(`Sayfa 4`)
        helpMessage.edit(embed, {buttons: [new MessageButton().setStyle('green').setLabel('Kullanıcı').setID('1'), new MessageButton().setStyle('blurple').setLabel('Moderasyon').setID('2'), new MessageButton().setStyle('blurple').setLabel('Kayıt Sistemi').setID('3'),  buttonDelete]})
        button.reply.defer()
        } else if (button.id == '4') {

        embed.setTitle('Sayfa 5')
        embed.setDescription(`Sayfa 5`)
        helpMessage.edit(embed, {buttons: [new MessageButton().setStyle('green').setLabel('Kullanıcı').setID('1'), new MessageButton().setStyle('blurple').setLabel('Moderasyon').setID('2'), new MessageButton().setStyle('blurple').setLabel('Kayıt Sistemi').setID('3'),  buttonDelete]})
        button.reply.defer()
      };
    });
  });
};
}
// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // //
exports.conf = {"aliases": ["y1"]}
exports.help = {"name":"button"}
