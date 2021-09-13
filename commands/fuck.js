module.exports = {
	name: 'fuck',
    description: 'Fuck that',
    usage: '<that>',
    //aliases: ['gr'],
    //cooldown: 5,
	execute(message, args) {
        if (!args.length)
        {
            message.channel.send('Fuck.');
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
            
            
     
            message.channel.send(`Fuck ${topic.trim()}`);
            message.channel.send(`\nAll my homies hate ${topic.trim()}.`);
        }
    

        setTimeout(() => {message.delete();}, 200);
	}
};