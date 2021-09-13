module.exports = {
	name: 'groove',
    description: 'Unleash some grooves',
    aliases: ['groovin'],
    cooldown: 0.5,
	execute(message, args) {
        
        var fs = require('fs');

        try {
            fs.readFile('gifs/groove.txt', 'utf8', function(err, contents) {

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