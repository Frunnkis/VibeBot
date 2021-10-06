module.exports = {
    name: 'log',
    usage: '<message>',
    description: 'Creator Only : save message',
    creatorOnly: true,
    cooldown: 0.5,
    args: true,
	execute(message, args) {
        const manager = require("../utility/safeOperations")
        console.log();

        var fs = require('fs');

        if (args == undefined) {
            manager.checkedSend(message, "Don't add empty lines!");
            throw new Error("Prevented empty lines.");
        }

        try {
            args.forEach(toAppend => {
                console.log(toAppend);
                fs.appendFile('logs/' + 'log.txt', toAppend +  "\n", function (err) {
                    if (err) throw err;
                    console.log('Saved!');
                });
            });
        }
        catch (error) {
            manager.checkedSend(message, "Something went wrong when opening the file");
        }
	}
};