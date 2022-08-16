const Discord = require('discord.js');

exports.run = async(client, message, args) => {
    
        const liste = ["Taş","Kağıt","Makas"];
        var bhamle,phamle;
        phamle = liste[Math.floor(Math.random()*3)];
        if(!message.content.split(" ")[1]) return message.channel.send("Doğru kullanım ``"+prefix+"tkmo <hamle>``")
        bhamle = message.content.split(" ")[1].toLowerCase();
        message.channel.send("Ben "+phamle+" Yaptım");
        if(bhamle=="taş"&&phamle=="Taş"){
            message.channel.send("Bu durumda Berabere!")
        }
        else if(bhamle=="taş"&&phamle=="Kağıt"){
            message.channel.send("Bu durumda Ben Kazandım!")
        }
        else if(bhamle=="taş"&&phamle=="Makas"){
            message.channel.send("Bu durumda Sen Kazandın!")
        }
        else if(bhamle=="kağıt"&&phamle=="Kağıt"){
            message.channel.send("Bu durumda Berabere!")
        }
        else if(bhamle=="kağıt"&&phamle=="Makas"){
            message.channel.send("Bu durumda Ben Kazandım!")
        }
        else if(bhamle=="kağıt"&&phamle=="Taş"){
            message.channel.send("Bu durumda Sen Kazandın!")
        }
        else if(bhamle=="makas"&&phamle=="Makas"){
            message.channel.send("Bu durumda Berabere!")
        }
        else if(bhamle=="makas"&&phamle=="Taş"){
            message.channel.send("Bu durumda Ben Kazandım!")
        }
        else if(bhamle=="makas"&&phamle=="Kağıt"){
            message.channel.send("Bu durumda Sen Kazandın!")
        }
        else{
            message.channel.send("Lütfen düzgün yazın.")
        }
    

};
exports.conf = {
 aliases: [],
};
exports.help = {
name: 'tkm',
description: '',
usage: ""
};