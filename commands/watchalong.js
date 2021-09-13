module.exports = {
    name: 'watchalong',
    usage: '<show>',
    ownerOnly: true,
    args: true,
    guildOnly: true,
    description: 'Send announcement for a watchalong, also let people get the role. ',
    execute(message, args) {
        const reactionPositive = message.guild.emojis.cache.find(emoji => emoji.name === "ack");
        const role = message.guild.roles.cache.find(role => role.name === "watchalong");

        const data = [];
        data.push(`@everyone, it's time to start a new watchalong! \n`);
        data.push(`We will be watching ${args}`);
        data.push(`React with \n${reactionPositive} to be notified`);

        //send message
        message.channel.send(data)
        .then(function (message) {
            
            //send reaction
            message.react(reactionPositive);

            //set up reactions filter
            const filter = (reaction, user) => {
                return reaction.emoji.name && user.id !== message.author.id;
            }
            //set up collector
            const collector = message.createReactionCollector(filter, {time: 1209600});
            
            collector.on('collect', (reaction, user) => {
                
                if (reaction.emoji.id == reactionPositive) {
                    message.guild.members.resolve(user.id).roles.add(role);
                }
            });

            collector.on('end', collected => {
                console.log(`log ended. ${collected.size} items`);
            });

        }).catch((e)=> console.log(e));

        
    }
}