const { imageEmbed } = require('../index');
module.exports = {
    name: 'bigify',
    aliases: ['big'],
    usage: '<emotes>',
    description: 'Returns the original file of provided emotes',
    args: true,
    execute(message, args) {
        
        args.filter(value => /<:.+:\d+>/.test(value))
        .forEach(emote => {
            message.channel.send({embeds : [imageEmbed.setImage(`https://cdn.discordapp.com/emojis/${/<a?:.+:(\d+)>/.exec(emote)[1]}.png?v=1`)] });
        });

        args.filter(value => /<a:.+:\d+>/.test(value))
        .forEach(emote => {
            message.channel.send({ embeds : [imageEmbed.setImage(`https://cdn.discordapp.com/emojis/${/<a?:.+:(\d+)>/.exec(emote)[1]}.gif?v=1`)] });
        });
    }
}