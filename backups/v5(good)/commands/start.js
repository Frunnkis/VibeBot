const { reactionFor, reactionAgainst, FOR_ROLE, AGAINST_ROLE } = require('../index');
//const { imageEmbed } = require('../index');
module.exports = {
    name: 'start',
    aliases: ['voting'],
    usage: '<topic>',
    args: true,
    ownerOnly: true,
    guildOnly: true,
    description: 'Announces GANG WAR. Automatically pings everyone ',
    execute(message, args) {
        const RF = message.guild.emojis.cache.find(emoji => emoji.name === reactionFor);
        const RA = message.guild.emojis.cache.find(emoji => emoji.name === reactionAgainst);
        const roleF = message.guild.roles.cache.find(role => role.id === FOR_ROLE);
        const roleA = message.guild.roles.cache.find(role => role.id === AGAINST_ROLE);

        var topic;
        args.forEach(string => {
            if (!topic)
            topic = string + ' ';
            else 
            topic += string + ' ';
        });
        topic.trim();

        const data = [];
        data.push(`@everyone, it's time to choose a side for the next GANG-WAR \n`);
        data.push(`The subject of this weeks war will be:\n ${topic} \n\nThe GANG-WAR will run from THURSDAY at MIDNIGHT through to SUNDAY at MIDNIGHT \n`);
        data.push(`React with \n${RF} TO BE ${roleF} \n${RA} TO BE ${roleA}`);

        message.channel.send(data);

        setTimeout(() => {
        const newMessage = message.channel.lastMessage;

        //reactions, delete old message
        newMessage.react(RF)
        .then(() => newMessage.react(RA))
        .then(() => message.delete())
        .catch(() => console.error('Reactions or delete failed'));
        
        //reactions filter
        const filter = (reaction, user) => {
            return reaction.emoji.name && user.id !== newMessage.author.id;
        }

        const collector = newMessage.createReactionCollector(filter, {time: 259200000});
        
        collector.on('collect', (reaction, user, ) => {
            
            if (reaction.emoji.name === reactionFor) {
                message.guild.members.resolve(user.id).roles.add(FOR_ROLE);
            } else if (reaction.emoji.name === reactionAgainst) {
                message.guild.members.resolve(user.id).roles.add(AGAINST_ROLE);
            }

        });

        collector.on('end', collected => {
            console.log(`log ended. ${collected.size} items`);
        });
        }, 300);
    }
}