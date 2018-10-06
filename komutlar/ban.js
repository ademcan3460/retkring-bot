const Discord = require('discord.js');


module.exports.run = async (bot, message, args) => {
message.delete();
    if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send( "ÜYELERİ_YASAKLA yetkisine sahip değilsin!");
    let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!bUser) return message.channel.send('Kullanıcı giriniz.")
    if(bUser.id === bot.user.id) return message.channel.send('Botu banlayamazsın');
    let bReason = args.join(" ").slice(22);
    if(!bReason) return message.channel.send('Sebep giriniz...')
    if(bUser.hasPermission("BAN_MEMBERS")) return message.channel.send("Banlamak İstediğin Kişi Üyeleri Yasakla Yetkisine Sahip Banlayamam...");

    let banEmbed = new Discord.RichEmbed()
    .setDescription("Yasaklama")
    .setColor("#bc0000")
    .addField("Yasaklanan Kişi", `${bUser} ID'si ${bUser.id}`)
    .addField("Yetkili", `<@${message.author.id}> ID'si ${message.author.id}`)
    .addField("Sebep", bReason);





    let incidentchannel = message.guild.channels.find(`name`, "mod-log");
    if(!incidentchannel) return message.channel.send("`mod-log` kanalını bulamıyorum.");

    message.guild.member(bUser).ban(bReason);
    incidentchannel.send(banEmbed);
}
module.exports.help = {
  name: "ban"
}
