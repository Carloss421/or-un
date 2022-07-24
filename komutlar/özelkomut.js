if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Yetkin yok!")
        var kismi = message.content.split(" ")[1];
        var kyazi = args.slice(1).join(" ");
        if(!kismi || !kyazi) return message.channel.send("Doğru kullanım ``"+prefix+"özelkomutayarla <komut ismi> <komut kullanılınca yazılacak yazı>``")
        db.set(`${message.guild.id}özelkismi`,kismi);
        db.set(`${message.guild.id}özelkyazi`,kyazi);
        message.channel.send("Sunucuya özel komut ayarlandı artık ``"+kismi+"`` yazdığınızda ``"+kyazi+"`` yazacağım.");