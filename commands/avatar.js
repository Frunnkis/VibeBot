module.exports = {
    name: 'avatar',
    aliases: ['icon', 'pfp'],
    usage: '<user>',
    description: 'Returns the profile picture of the user pinged',
    execute(message, args) {
        const manager = require("../utility/safeOperations");

        if (!message.mentions.users.size) {
            return manager.checkedImageEmbed(message, message.author.displayAvatarURL({ format: "png", dynamic: true}));
        } 
        else {
        const avatarList = message.mentions.users.map(user => {
            return manager.checkedImageEmbed(message, user.displayAvatarURL({ format: "png", dynamic: true}));
         });
        }

    }
}