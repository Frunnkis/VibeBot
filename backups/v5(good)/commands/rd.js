const {degeneracy} = require('../index');
module.exports = {
	name: 'rd',
    description: '',
    guildOnly: false,
    //ownerOnly: true,
	execute(message, args) {

        if (message.guild.members.resolve(message.author.id).roles.cache.some(role => role.name === 'bot')) { 

            //string recombiner
            var topic;
            args.forEach(string => {
                if (!topic)
                topic = string + ' ';
                else 
                topic += string + ' ';
            });

            //Channel fetch
            const channelRD = message.client.channels.cache.get(degeneracy);

            //send message
            channelRD.send(`${topic.trim()}`);
        }
        //else {
        //    message.author.send('Sorry you don\'t have permission to use that command');
        //}

    }

}