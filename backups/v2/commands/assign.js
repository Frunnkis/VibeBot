module.exports = {
    name: 'assign',
    args: true,
    usage: '<role>',
    guildOnly: true,
	description: 'Generic function: assign the role passed to it',
	execute(message, args) {
        message.member.roles.add(args);        
	}
};