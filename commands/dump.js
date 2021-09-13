module.exports = {
    name: 'dump',
    usage: '<category>',
    description: 'Show every gif in a category (CAUSES SPAM)',
    ownerOnly: true,
    guildOnly: true,
    args: true,
    cooldown: 0.5,
	execute(message, args) {
        
        var fs = require('fs');

        try {
            fs.readFile('gifs/'+ args +'.txt', 'utf8', function(err, contents) {

                try {
                    var answers = contents.split("\n");
                        
                    answers.forEach(element => {
                        if (element != "")
                            message.channel.send(element);
                            
                    });
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