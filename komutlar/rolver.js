const Discord = require('discord.js');
exports.run = (client, message, args) => {

    if (!message.guild) {
        const ozelmesajuyari = new Discord.MessageEmbed()
            .setColor(0xFF0000)
            .setTimestamp()
            .setAuthor(message.author.username, message.author.avatarURL)
            .addField(':warning: **Uyarı** :warning:', '`rol-ver` **adlı komutu özel mesajlarda kullanamazsın.**')
        return message.author.sendEmbed(ozelmesajuyari);
    }
    if (!message.member.hasPermission("MANAGE_ROLES")) return message.reply('Bunun için gerekli iznin yok');
    let guild = message.guild
    let rol = message.mentions.roles.first() || message.guild.roles.cache.get(args[0])
    let user = message.mentions.members.first()

    if (!user) return message.reply('**Kime rol verileceğini yazmadın!**').catch(console.error);
    if (!rol) return message.reply('**Rolü belirtmedin**');
    user.roles.add(rol);

    const embed = new Discord.MessageEmbed()
        .setDescription(`${user} kullanıcısına başarıyla ${rol} rolü verildi!`)
        .setFooter('Dijitalaile - @bi', client.user.avatarURL)
        .setColor("RANDOM")
        .setTimestamp()
    message.channel.send(embed)
};

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ['rolver'],
    permLevel: 0
};

exports.help = {
    name: 'rol-ver',
    description: 'İstediğiniz kişiye istediğiniz rolü verir.',
    usage: 'rol-ver [kullanıcı] [@rol]'
};