module.exports = {
	name: 'say',
    description: 'say',
    guildOnly: true,
    //aliases: [''],
    //cooldown: 5,
	execute(message, args) {

        setTimeout(() => {message.delete();}, 5);
        
        setTimeout(() => {
        if (args == 'uwu')
        {
            return message.author.send('I\'ve deleted your message to save you the embarassment but I must ask that you please refrain from misusing me, you filthy degenerate.');
        }
            
            var topic;
            args.forEach(string => {
                if (!topic)
                topic = string + ' ';
                else 
                topic += string + ' ';
            });
            message.channel.send(`${topic.trim()}`);

        }, 15);
        
    }

}