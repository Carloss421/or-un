const Discord = require('discord.js')

    exports.run = async(client, message, args) => {
        let kullanıcı = message.mentions.members.first();
        let teklifyazi = args.slice(1).join(' ')

        if(!kullanıcı){
            const cmfhata = new Discord.MessageEmbed()
            .setColor('#ff0000')
            .setDescription(`**Evlenme Teklifi Edeceğin Kullanıcıyı Etiketle**`)
            return message.channel.send(cmfhata)
        }

        if(!teklifyazi){
            const cmfhata = new Discord.MessageEmbed()
            .setColor('#ff0000')
            .setDescription(`**Evlenme Teklifi Edeceğin Kişi Seçildi Tamam Ama Şöyle Süslü Püslü Metinde Gir Etkilensin :smile:**`)
            return message.channel.send(cmfhata)
        }

        const filter = (reaction) => {
            return ['✅', '❌'].includes(reaction.emoji.name) && kullanıcı.id;
        }

        if(kullanıcı){
            const teklifmesaj = new Discord.MessageEmbed()
            .setDescription(" ** " + teklifyazi + " ** ")
            .setColor('RANDOM')
            let teklifreact = await kullanıcı.send(teklifmesaj)
            await teklifreact.react("✅")
            await teklifreact.react("❌")
            teklifreact.awaitReactions(filter, {
                max: 1,
                time: 10000,
                errors: ['time']
            }).then(cmf => {
                const tiklandi = cmf.first();
                    if(tiklandi.emoji.name === "✅"){
                        const kabuletti = new Discord.MessageEmbed()
                            .setDescription(`${kullanıcı} Kişisi evlenme teklifini kabul etti`)
                            .setColor('#00ff00')
                        message.channel.send(kabuletti)
                    } else {
                        const redetti = new Discord.MessageEmbed()
                         .setDescription(`${kullanıcı} Kişisi evlenme teklifini red etti`)
                            .setColor('#ff0000')
                        message.channel.send(redetti)
                    }   
                })
        }
    } //CodeMareFi - #MareFi - #KadirFi

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['çıkma-teklifi','Çıkma-teklifi','ÇIKMA-TEKLİFİ','evlenmeteklifi'],
    permLevel: 0
}

exports.help = {
    name: 'çıkmateklifi'
}