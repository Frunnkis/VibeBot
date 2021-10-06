module.exports = {
    name: 'dump',
    usage: '<category>',
    description: 'Show every gif in a category (CAUSES SPAM)',
    ownerOnly: true,
    guildOnly: true,
    args: true,
    cooldown: 0.5,
	execute(message, args) {
        const manager = require("../utility/safeOperations");

        var fs = require('fs');

        try {
            fs.readFile('gifs/'+ args +'.txt', 'utf8', function(err, contents) {

                try {
                    var answers = contents.split("\n");
                    
                    var data = [];

                    answers.forEach(element => {
                        //add each element to data array
                        if (element != "") {
                            data.push(element);
                        }

                        //once array reaches 5 elements, send joined array and empty array
                        if (data.length >= 5) {
                            manager.checkedSend(message, data.join("\n"));
                            data = [];
                        }
                    });

                    if (data != [])
                        manager.checkedSend(message, data.join("\n"));
                }
                catch (error) {
                    manager.checkedSend(message, "Something went wrong when reading the file.");
                }
            });
        }
        catch (error) {
            manager.checkedSend(message, "Not a valid category!");
        }
	}
};