
client.on('ready', () => {

const database = require('quick.db');
let username = 'dijitalailee'// hesabın kullanıcı adını yazın
let kanalID = ''// mesaj gönderilecek kanal id

setInterval(() => {
const userInstagram = require("user-instagram");
userInstagram(username).then(result => {

if(!database.fetch(posts.${username})) {
database.set(posts.${username}, result.postsCount);
} else {

if(database.fetch(posts.${username}) < result.postsCount) {
client.channels.cache.get(kanalID).send(new Discord.MessageEmbed()
.setColor('BLUE')
.setAuthor(result.fullName, result.profilePicHD)
.setDescription(**@${username}** yeni bir post yolladı! [Tıkla ve profile git](https://www.instagram.com/${username})!));
return database.set(posts.${username}, result.postsCount);
};

};

}).catch(console.error);
}, 10006010);

});
