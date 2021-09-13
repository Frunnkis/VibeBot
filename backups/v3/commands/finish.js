module.exports = {
	name: 'finish',
	ownerOnly: true,
	description: 'Remove the gang war roles from all members',
	execute(message, FOR_ROLE, AGAINST_ROLE) {
		var count = 1;
        message.guild.members.cache.each(user => {
            message.channel.send(count +' cleared');
            user.roles.remove(FOR_ROLE);
			user.roles.remove(AGAINST_ROLE);
			count++;
        });
    }
};