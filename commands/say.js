module.exports = {
	name: 'say',
    description: 'say',
    guildOnly: true,
    //aliases: [''],
    //cooldown: 5,
	execute(message, args) {
        const manager = require("../utility/safeOperations");
        setTimeout(() => {
            var topic = new String();
            args.forEach(string => {
                if (!topic)
                topic = string + ' ';
                else 
                topic += string + ' ';
            });
            manager.checkedSend(message, `${topic.trim()}`);
        }, 15);

        manager.checkedDelete(message);
        
    }

}