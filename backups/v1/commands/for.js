module.exports = {
    name: 'for',
	description: 'Assign the for side in GANG WARS!',
	execute(message, args) {
        message.member.roles.add(args);        
	}
};