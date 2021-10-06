module.exports = {
    name: 'add',
    usage: '<file>, <link>',
    description: 'Creator Only : Add a link to the !g command',
    creatorOnly: true,
    cooldown: 0.5,
    args: true,
	execute(message, args) {
        const manager = require("../utility/safeOperations");
        const { reactOK } = require('../config.json');

        //add new gif
        var fileName;
        var toAppend;

        fileName = args[0];
        toAppend = args[1];
        console.log(fileName);

        var fs = require('fs');

        if (toAppend == undefined) {
            manager.checkedSend(message, "Don't add empty lines!");
            throw new Error("Prevented empty lines.");
        }

        try {
            fs.appendFile('gifs/' + fileName + '.txt', toAppend +  "\n", function (err) {
                if (err) throw err;
                console.log('Saved!');
                manager.checkedReact(message, reactOK);
            });
        }
        catch (error) {
            manager.checkedSend(message, "Something went wrong when opening the file");
        }

        //creating list
        const refreshList = require("../utility/refreshList");
        refreshList.refresh();
	}
};