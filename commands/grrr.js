//const { degeneracy} = require('../index');
module.exports = {
	name: 'grrr',
    description: 'Thanks for sharing!',
    aliases: ['gr'],
    //cooldown: 5,
	execute(message, args) {
        const manager = require("../utility/safeOperations");

        if (!args.length)
        {
            manager.checkedSend(message, 'Grrr.');
        }
        else if (args == ';')
        {
            manager.checkedSend(message, 'Shutting down the arena');
            console.log(message.channel.id);
        }
        else if (args == 'yam')
        {
            manager.checkedSend(message, args);
            manager.checkedSend(message, '\nPRIEST');
        }
        else if (args == 'water')
        {
            manager.checkedSend(message, `${message.author.username} reminds you to \ndrink some water\n***RIGHT NOW***`);
        }
        else if (args == 'just')
        {
            manager.checkedSend(message, 'Our cause is just.')
        }
        else 
        {
            var topic;
            args.forEach(string => {
                if (!topic)
                topic = string + ' ';
                else 
                topic += string + ' ';
            });
     
            manager.checkedSend(message, `${message.author.username} said: "${topic.trim()}"`);
            manager.checkedSend(message, '\nThanks for sharing.');
        }
	}
};