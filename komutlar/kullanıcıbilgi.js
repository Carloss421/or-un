const { MessageEmbed } = require('discord.js')
const moment = require('moment') // npm i moment
moment.locale('TR')

    exports.run = (client, message, args) => {

        const member = message.mentions.members.first() || message.member
        const status = {
            online: '🟢:- Online',
            idle: '🟡:- Idle',
            dnd: '🔴:- DND',
            offline: '⚫:- Offline'
        }

        const embed = new MessageEmbed()
        .setColor('RANDOM')
        .setTitle(`Kullanıcı Bilgileri ${member.user.username}`, member.user.displayAvatarURL())
        .setThumbnail(member.user.displayAvatarURL({dynamic: true, size: 512}))
        .addField('**Kullanıcı adı**', `${member.user.username}#${member.user.discriminator}`) 
        .addField('**Kullanıcı İd**', `${member.id}`)
        .addField('**Durumu**', `${status[member.presence.status]}`)
        .addField('**Hesap Oluşturulma Tarihi**', `${moment.utc(member.user.createdAt).format('LLLL')}`)
        .addField('**Sunucuya Katılım Tarihi**', `${moment.utc(member.joinedAt).format('LLLL')}`)
        .addField('**Sesli**', member.voice.channel ? member.voice.channel.name + `(${member.voice.channel.id})` : 'Sesli Kanalda Değil!')
        .addField('**Rolleri**', `${member.roles.cache.map(role => role.toString())}`, true)
        
        message.channel.send(embed)
    }
    exports.conf = {
        enabled: true,
        guildOnly: true,
        aliases: ["kb"],
        permLevel: 0
       };
       
       exports.help = {
          name: 'kullanıcıbilgi',
        description: 'kullanıcı bilgi verir',
        usage: 'kb'
       };