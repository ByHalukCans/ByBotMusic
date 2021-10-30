const { MessageEmbed } = require('discord.js');

module.exports.config = { 
    name: 'Gecikme',
    aliases: ["Gecikme","gecikme"]
}

module.exports.sex = async(client, message, args, config) => {

message.channel.send(new MessageEmbed().setColor('RANDOM').setAuthor(`✔️ - Gecikme: ${client.ws.ping}ms`).setTimestamp().setFooter(`${config.EmbedFooter}`));

};

