const AsreaperDiscord = require('discord.js');
const AsreaperClient = new AsreaperDiscord.Client();
exports.run = (client, message) => {
  const AsreaperEmbed = new AsreaperDiscord.MessageEmbed();
  AsreaperEmbed.setColor(0x36393F)
  AsreaperEmbed.setDescription(`Botumuza Oy Vererek Bize Destek Olabilirsiniz : https://top.gg/bot/883013030403784734`)
  message.channel.send(AsreaperEmbed)
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  kategori: "Bot",
  permLevel: 0
};

exports.help = {
  name: 'oy',
  description: 'botu oylatır.',
  usage: 'oy'
};