module.exports = {
    name: 'bonk',
    usage: 'optional: <user>',
    description: 'Call them out for being horny on main',
    aliases: ['horny'],
    cooldown: 0.5,
	execute(message, args) {
        if (message.mentions.users.size) {
            const avatarList = message.mentions.users.map(user => {
                message.channel.send(`${user.username} is going to horny jail`);
            });
        }
        var fs = require('fs');

        try {
            fs.readFile('gifs/bonk.txt', 'utf8', function(err, contents) {

                try {
                    var answers = contents.split("\n");
                        
                    var randomAnswer = answers[Math.floor(Math.random() * answers.length)];
                    message.channel.send(randomAnswer);
                }
                catch (error) {
                    message.channel.send("Something went wrong when reading the file.")
                }
            });
        }
        catch (error) {
            message.channel.send("Something went wrong when opening the file");
        }

        setTimeout(() => {message.delete();}, 200);
	}
};