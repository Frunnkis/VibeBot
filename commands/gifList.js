module.exports = {
    name: 'gifList',
    //usage: '<category>',
    description: 'List the gif categories',
    aliases: ['gl'],
    //args: true,
    cooldown: 0.5,
	execute(message, args) {
        const manager = require("../utility/safeOperations");
        
        var fs = require('fs');

        try {
            fs.readFile('gifList.txt', 'utf8', function(err, contents) {
                //split contents by line
                var files = contents.split("\n");

                //var to hold output
                let holdOutput = "";
                var count = 1;
                files.forEach(element => {
                
                    //skip empty lines
                    if (element == "") return;

                    //bad formatting please do not hate me
                    let format = ": "
                    if (count < 10) { format += " "; }

                    //add processed line to output
                    holdOutput += count + format + element.replace(".txt", "") + '\n';
                    count++;
                });

                manager.checkedSend(message, "Here are the available categories: ```" + holdOutput + "```");
            });
        }
        catch (error) {
            console.log(error);
            manager.checkedSend(message, "Something went wrong reading the file.");
        }
	}
};