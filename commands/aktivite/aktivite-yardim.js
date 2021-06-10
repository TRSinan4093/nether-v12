const Discord = require('discord.js');
const qdb = require('quick.db');
exports.run = async(client, message, args) => {

  let prefix = await require('quick.db').fetch(`prefix_${message.guild.id}`) || `.`
  let onlycode = args.slice(0).join(' ');


const embed = new Discord.MessageEmbed()
.setTitle('Aktivite Yardım Menüsü')
.addField(`**<:youtube:804490728394719303> Youtube Together **`, `Belirlenen sesli kanala youtube together açar \`${prefix}aktivite youtube #ses-kanal \``)
.addField(`**<:bicak:837945653061615627> Poker Night **`, `Belirlenen sesli kanala poker night açar \`${prefix}aktivite poker #ses-kanal \``)
.addField(`** Betrayal.io **`, `Belirlenen sesli kanala youtube together açar \`${prefix}aktivite youtube #ses-kanal \``)
message.channel.send(embed)
};


exports.conf = {
  aliases: ["aktivite-yardım"],
  permLevel: 0
};
exports.help = {
  name: "aktivite yardım"
}