const Discord = require("discord.js");
const client = new Discord.Client();

var prefix = "noads";



//////////////////////////////////////
//##################################//
//#                                #//
//#         Anti ads bot 20        #//
//#        Ripbyrustavi#8091       #//
//#         DISCORD v12            #//
//#                                #//
//##################################//
//////////////////////////////////////





client.on('ready', () => {
  console.log(`Giri� yap�ld�. Nick: ${client.user.tag}`);
});

client.on('message', msg => {
  if (msg.content === prefix + 'yard�m') {
    msg.reply('Yard�ma ihtiyac�n yok. Otomatik olarak bot discord davet linklerini engeller.');
  }
});











client.on("message", msg => {
  if (msg.content.toLowerCase().match(/(discord\.gg\/)|(discordapp\.com\/invite\/)/g) && !msg.author.bot && msg.channel.type === "text" && msg.channel.permissionsFor(msg.guild.member(client.user)).has("MANAGE_MESSAGES")) {
    msg.delete(30).then(deletedMsg => {
      deletedMsg.reply("Discord davet linki payla�t���n� alg�lad�k. Bu sunucu No-Ads ile korunmakta.").catch(e => {
        console.error(e);
      });
    }).catch(e => {
      console.error(e);
    });
  }
});





client.login('tokeninburayagelecek!');