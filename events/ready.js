const chalk = require('chalk');
const moment = require('moment');
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
var prefix = ayarlar.prefix;

module.exports = client => {
 setInterval(function() {
}, 8000);
  var msgArray = [
"@bi ile sunucularınız güvende.",
"DijitalAile discord sunucumuza beklerim",
"Her zaman sizlerle!"
 ];

 setInterval(() => {
  var rastgeleOyun = Math.floor(Math.random() * msgArray.length);
  client.user.setActivity(`!yardım`, { type: 'PLAYING' ,  })
}, 5000);
    console.log(`Asreaper başarıyla giriş yaptı.`);
}