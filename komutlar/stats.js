const Discord = require("discord.js");
const moment = require("moment");
require("moment-duration-format");

module.exports.run = async (bot, message, args) => {
   const seksizaman = moment.duration(bot.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]");
   const istatistikler = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setFooter('Croxy\'s', bot.user.avatarURL)
  .addField("» Botun Sahibi", "<@355993240354160640> | Croxy#6381")
  .addField("» Bellek kullanımı", (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2) + ' MB', true)  
  .addField("» Çalışma süresi", seksizaman)
  .addField("» Kullanıcılar", bot.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString(), true)
  .addField("» Sunucular", bot.guilds.size.toLocaleString(), true)
  .addField("» Kanallar", bot.channels.size.toLocaleString(), true)
  .addField("» Discord.JS sürüm", "v"+Discord.version, true)
  .addField(`» Node.JS sürüm`, `${process.version}`, true)
  .addField("» Ping", bot.ping+" ms", true)
  .addField("**❯ Bot Davet**", " [Davet Et](BOTUNUN DAVET LİNKİ KARDEŞİM.)", )
  .addField("**❯ Destek Sunucusu**", " [Sunucumuza Katıl](BOTUNUN DESTEK SUNUCUSU KARDEŞİM)", )
  return message.channel.send(istatistikler);
  };

module.exports.help = {
  name: "stats"
}
