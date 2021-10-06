module.exports = {
	name: 'fuck',
    description: 'Fuck that',
    usage: '<that>',
    //aliases: ['gr'],
    //cooldown: 5,
	execute(message, args) {
        const manager = require("../utility/safeOperations");

        if (!args.length)
        {
            manager.checkedSend(message,'Fuck.');
        }
        else 
        {
            var topic;
            args.forEach(string => {
                if (!topic)
                topic = string + ' ';
                else 
                topic += string + ' ';
            });
            
            
     
            manager.checkedSend(message,`Fuck ${topic.trim()}`);
            manager.checkedSend(message,`\nAll my homies hate ${topic.trim()}.`);
        }
	}
};