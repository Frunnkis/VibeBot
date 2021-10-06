const { imageEmbed } = require('../index');
module.exports = {
    name: 'turtleneck',
    aliases: ['kill'],
    usage: 'optional: <user>',
    description: 'Turtlenecks yourself or the user selected',
    execute(message, args) {
        const manager = require("../utility/safeOperations");

        if (!message.mentions.users.size) {
            manager.checkedSend(message, `${message.author.username} turtlenecked themselves https://media.discordapp.net/attachments/439872388390191116/713836314197229608/e742a21cf6e64183ac0a12420ba5d23d.gif`);
        } else {

        const avatarList = message.mentions.users.map(user => {
            //return message.channel.send(`<${user.displayAvatarURL({ format: "png", dynamic: true})}>`);
            manager.checkedSend(message, `${message.author.username} turtlenecked ${user.username} https://media.discordapp.net/attachments/439872388390191116/713836314197229608/e742a21cf6e64183ac0a12420ba5d23d.gif`) 
                
                //imageEmbed.setImage(user.displayAvatarURL({ format: "png", dynamic: true})) );
         });
        }
    }
}