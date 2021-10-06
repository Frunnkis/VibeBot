module.exports = {
    name: 'steal',
    usage: '<emote>',
    description: 'Steals the passed emote and adds it to this server',
    emoteOnly: true,
    args: true,
    execute(message, args) {
        const {Permissions } = require('discord.js');
        const manager = require("../utility/safeOperations");
        const { reactOK } = require('../config.json');

        //check permissions are valid
        if (!message.guild.me.permissions.has(Permissions.FLAGS.MANAGE_EMOJIS_AND_STICKERS) ) {
            return manager.checkedSend(message, "Missing permission: MANAGE_EMOJIS_AND_STICKERS");
        }

        //static emotes
        args.filter(value => /<:.+:\d+>/.test(value))
        .forEach(emote => {
            message.guild.emojis.create(`https://cdn.discordapp.com/emojis/${/<a?:.+:(\d+)>/.exec(emote)[1]}.png?v=1`, /<a?:(.+):.+>/.exec(emote)[1]);
        });

        //animated emotes
        args.filter(value => /<a:.+:\d+>/.test(value))
        .forEach(emote => {
            message.guild.emojis.create(`https://cdn.discordapp.com/emojis/${/<a?:.+:(\d+)>/.exec(emote)[1]}.gif?v=1`, /<a?:(.+):.+>/.exec(emote)[1]);
        });

        manager.checkedReact(message, reactOK);
    }
}