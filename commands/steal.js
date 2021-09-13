module.exports = {
    name: 'steal',
    //aliases: ['big'],
    usage: '<emote>',
    description: 'Steals the passed emote and adds it to this server',
    emoteOnly: true,
    args: true,
    execute(message, args) {
        
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
    }
}