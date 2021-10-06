const { Permissions, Message, Channel } = require('discord.js');

//safe text send
var checkedSend = function(message, reply) {
    //check string isn't empty
    if (typeof reply != "string" || reply.length == 0 || reply == null)
        return;

    //check permissions are valid
    if (!message.guild.me.permissions.has(Permissions.FLAGS.SEND_MESSAGES) ) {
        return;
    }

    message.channel.send(reply).catch(console.error);
};

//safe embed
var checkedImageEmbed = function(message, imageURL) {
    const { imageEmbed } = require('../index');
    //check string isn't empty
    if (typeof imageURL != "string" || imageURL.length == 0 || imageURL == null)
        return;

    //check permissions are valid
    if (!message.guild.me.permissions.has(Permissions.FLAGS.SEND_MESSAGES) ) {
        return;
    }
    
    message.channel.send({ embeds : [imageEmbed.setImage(imageURL) ] });
};

//safe react
var checkedReact = function(message, emote) {
    if (!message.guild.me.permissions.has(Permissions.FLAGS.ADD_REACTIONS) ) {
        return;
    } 

    message.react(emote);
}

//safe delete
var checkedDelete = function(message) {
    if (!message.guild.me.permissions.has(Permissions.FLAGS.MANAGE_MESSAGES) ) {
        return;
    } 

    message.delete().catch(console.error);
}

module.exports.checkedSend = checkedSend;
module.exports.checkedDelete = checkedDelete;
module.exports.checkedImageEmbed = checkedImageEmbed;
module.exports.checkedReact = checkedReact;