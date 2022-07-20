const Discord = require('discord.js');

exports.run = async(client, message, args) => {
const emoji = message.client.emojis.get('');
      let isEnabled;
      message.reply("`Talebiniz dikkate alındı, ekibimiz sizinle iletişim kuracaktır.`");
      let mesaj = args.slice(0).join(' ');
      let chan = message.channel;
      let destekKanal = "XXX"; //Destek Kanalı ID
      const embed = new Discord.RichEmbed()
        .addField(' :warning: ', `Canlı Destek Talebi`)
        .setAuthor(`${message.author.tag} (${message.author.id})`, `${message.author.avatarURL}`)
        .setColor("00ff00")
        .addField(`Bilgiler`, `**Sunucu**: ${message.guild.name} (${message.guild.id}) \n**Kanal**: ${message.channel.name} (${message.channel.id}) \n**Talep Sahibi**: ${message.author.tag} (${message.author.id}) \n**Destek Mesajı**: ${mesaj}`)
        .setFooter("X | Canlı Destek")
        client.channels.get(destekKanal).send({
        embed: embed
      });
    const collector = client.channels.get(destekKanal).createCollector(message => message.content.startsWith(''), {
      time: 0
    })
    client.channels.get(destekKanal).send('** Destek .ağrısına bağlanmak için** `bağlan` **yazınız, iptal etmek için** `iptal` **yazınız.**')
    collector.on('message', (message) => {
      if (message.content === 'iptal') collector.stop('aborted')
      if (message.content === 'bağlan') collector.stop('success')
    })
    collector.on('end', (collected, reason) => {
      if (reason === 'time') return message.reply('``Destek talebi zaman aşımına uğradı.``')
      if (reason === 'aborted') {
        message.reply('``Destek talebi reddedildi.``')
        client.channels.get(destekKanal).send('``Destek talebi reddedildi.``')
      }
      if (reason === 'success') {
        client.channels.get(destekKanal).send('``Talebiniz dikkate alınmıştır.``')
        client.channels.get(destekKanal).send('**Destek talebini iptal etmek için `iptal` yazınız.**)
        chan.send(`${message.author}`)
        chan.send('``Destek talebiniz yetkili tarafından kabul edildi``')
        chan.send('**Destek talebini iptal etmek için `iptal` yazınız.**')
        isEnabled = true
        client.on('message', message => {
          function contact() {
            if (isEnabled === false) return
            if (message.author.id === client.user.id) return
            if (message.content.startsWith('iptal')) {
              message.channel.send('``Canlı Destek İptal Edildi``')
              if (message.channel.id === chan.id) client.channels.get(destekKanal).send('``Canlı destek iptal edildi.``')
              if (message.channel.id === destekKanal) chan.send('``Canlı destek iptal edildi.``')

              return isEnabled = false
            }
            if (message.channel.id === chan.id) client.channels.get(destekKanal).send(`**Talepte Bulunan Kişi :** ${message.author.tag} : ${message.content}`)
            if (message.channel.id === destekKanal) chan.send(`**Yetkili :** ${message.author.tag} : ${message.content}`)
          }
          contact(client)
        })
      }
    })
}

  exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["canlı","canli","destek"],
  permLevel: 0
};

exports.help = {
  name: 'canlıdestek',
  description: 'Canlı Destek Tablebi Oluşturur.',
  usage: 'canlıdestek'
};