module.exports = {
    name: 'gif',
    usage: '<category>',
    description: 'Randomly send a gif from the categories',
    aliases: ['g'],
    args: true,
    cooldown: 0.5,
	execute(message, args) {
        
        var fs = require('fs');

        try {
            fs.readFile('gifs/'+ args +'.txt', 'utf8', function(err, contents) {

                try {
                    var answers = contents.split("\n");
                        
                    var randomAnswer = answers[Math.floor(Math.random() * answers.length)];
                    while (randomAnswer == "") {
                        randomAnswer = answers[Math.floor(Math.random() * answers.length)];
                    }
                    message.channel.send(randomAnswer);
                }
                catch (error) {
                    message.channel.send("Something went wrong when reading the file.");
                }
            });
        }
        catch (error) {
            message.channel.send("Not a valid category!");
        }
	}
};
