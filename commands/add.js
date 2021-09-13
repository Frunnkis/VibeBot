module.exports = {
    name: 'add',
    usage: '<file>, <link>',
    description: 'Creator Only : Add a link to the !g command',
    creatorOnly: true,
    cooldown: 0.5,
    args: true,
	execute(message, args) {

        //add new gif
        var fileName;
        var toAppend;

        fileName = args[0];
        toAppend = args[1];
        console.log(fileName);

        var fs = require('fs');

        if (toAppend == undefined) {
            message.channel.send("Don't add empty lines!");
            throw new Error("Prevented empty lines.");
        }

        try {
            fs.appendFile('gifs/' + fileName + '.txt', toAppend +  "\n", function (err) {
                if (err) throw err;
                console.log('Saved!');
            });
        }
        catch (error) {
            message.channel.send("Something went wrong when opening the file");
        }

        //creating list
        const refreshList = require("../utility/refreshList");
        refreshList.refresh();

        //delete message
        try { setTimeout(() => {message.delete();}, 200);}
        catch (error) {};
	}
};