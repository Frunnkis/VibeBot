//const { degeneracy} = require('../index');
module.exports = {
	name: 'grrr',
    description: 'Thanks for sharing!',
    aliases: ['gr'],
    //cooldown: 5,
	execute(message, args) {
        if (!args.length)
        {
            message.channel.send('Grrr.');
        }
        else if (args == ';')
        {
            message.channel.send('Shutting down the arena');
            console.log(message.channel.id);
        }
        else if (args == 'yam')
        {
            message.channel.send(args);
            message.channel.send('\nPRIEST');
        }
        else if (args == 'water')
        {
            message.channel.send(`${message.author.username} reminds you to \ndrink some water\n***RIGHT NOW***`);
        }
        else if (args == 'uwu')
        {
            message.channel.send('stop');
        }
        else if (args == 'gf')
        {
            message.channel.send(`Welcome to my harem, ${message.author.username}`);
        }
        else if (args == 'just')
        {
            message.channel.send('Our cause is just.')
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
            
            
     
            message.channel.send(`${message.author.username} said: "${topic.trim()}"`);
            message.channel.send('\nThanks for sharing.');
        }
    

        setTimeout(() => {message.delete();}, 200);
	}
};