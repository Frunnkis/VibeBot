const { imageEmbed } = require('../index');
module.exports = {
    name: 'avatar',
    aliases: ['icon', 'pfp'],
    usage: '<user>',
    description: 'Returns the profile picture of the user pinged',
    execute(message, args) {
        
        if (!message.mentions.users.size) {
            return message.channel.send(imageEmbed.setImage(message.author.displayAvatarURL({ format: "png", dynamic: true})) );
        } else {

        const avatarList = message.mentions.users.map(user => {
            //return message.channel.send(`<${user.displayAvatarURL({ format: "png", dynamic: true})}>`);
            return message.channel.send(imageEmbed.setImage(user.displayAvatarURL({ format: "png", dynamic: true})) );
         });
        }

    }
}