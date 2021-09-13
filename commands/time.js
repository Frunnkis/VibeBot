module.exports = {
	name: 'time',
    description: 'Says when this channel was created!',
    cooldown: 2,
	execute(message, args) {
        
        message.channel.send(`This channel was created on ${message.channel.createdAt}\n`);
        
	}
};