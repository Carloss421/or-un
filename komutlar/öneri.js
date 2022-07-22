const Discord = require("discord.js");
exports.run = function(client, message, args) {
  let type = args.slice(0).join(" ");
  if (type.length < 1)
    return message.channel.send(
      "Lütfen önerinizi yazın. Örnek kullanım: ``!öneri Bence token komutu kalmalı``"
    );
  message
    .reply(
      "Öneri gönderilsin mi? Gönderilmesini istiyorsan `evet` yazman yeterlidir."
    )
    .then(() => {
      message.channel
        .awaitMessages(response => response.content === "evet", {
          max: 1,
          time: 30000,
          errors: ["time"]
        })
        .then(collected => {
          message.reply(
            "Tavsiyeniz İçin Teşekkürler | Tavsiyeniz Bot Sahibine İletildi!"
          );
          const embed2 = new Discord.MessageEmbed()
            .setColor("GREEN")
            .addField(`Kullanıcı ID`, message.author.id, true)
            .addField(`Kullanıcı Adı`, message.author.username, true)
            .addField(`Kullanıcı Tagı`, message.author.discriminator, true)
            .addField(`Sunucu`,message.channel.createInvite({ maxAge: 0 }).then((invite) => {invite})
            .addField("Öneri", type)
            .setTimestamp()
            .setFooter("Öneriyi gönderdiği saat ")
            .setThumbnail(message.author.avatarURL());
          //client.users.cache.get("331765705168912384").send(embed2);
          client.channels.cache.get("999991532553785345").send(embed2)
        });
    });
};


exports.conf = {
  aliases: []
};

exports.help = {
  name: "öneri",
};