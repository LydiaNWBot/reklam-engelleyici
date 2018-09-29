const Discord = require("discord.js");
const client = new Discord.Client();

var prefix = ".";



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
  console.log(`İsim: ${client.user.tag}`);
  client.user.setStatus("dnd");
  client.user.setActivity(`${prefix}yardım + ${client.guilds.size} sunucu + ${client.users.size} kullanıcı`);
});

client.on('message', msg => {
  if (msg.content === prefix + 'yardım') {
    msg.reply('Yardıma ihtiyacın yok. Otomatik olarak bot discord davet linklerini engeller.');
  }
});






client.on("message", msg => {
  if (msg.content.toLowerCase().match(/(porn|nude|fuck)/g) && !msg.author.bot && msg.channel.type === "text" && msg.channel.permissionsFor(msg.guild.member(client.user)).has("MANAGE_MESSAGES")) {
    msg.delete(30).then(deletedMsg => {
      deletedMsg.reply("Üzgünüm Mesajın Engellendi!").catch(e => {
        console.error(e);
      });
    }).catch(e => {
      console.error(e);
    });
  }
});




client.on("message", msg => {
  if (msg.content.toLowerCase().match(/(discord\.gg\/)|(discordapp\.com\/invite\/)/g) && !msg.author.bot && msg.channel.type === "text" && msg.channel.permissionsFor(msg.guild.member(client.user)).has("MANAGE_MESSAGES")) {
    msg.delete(30).then(deletedMsg => {
      deletedMsg.reply("Discord davet linki paylaştığını algıladık. Bu sunucu **MeM Blocker** ile korunmakta.").catch(e => {
        console.error(e);
      });
    }).catch(e => {
      console.error(e);
    });
  }
});





client.login('NDkzODU2MDUwNTU0OTk0Njkw.DorD2Q.rhB5xP0zfijZNJUsx5ZYYGZ607U');  
