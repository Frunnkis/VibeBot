const { FOR_ROLE, AGAINST_ROLE } = require('../index');
module.exports = {
	name: 'finish',
	creatorOnly: true,
	guildOnly: true,
	creatorOnly : true,
	description: 'Creator Only : Remove the gang war roles from all members',
	execute(message) {
		var count = 1;
        message.guild.members.cache.each(user => {
			message.channel.send(count +' cleared');
            user.roles.remove(FOR_ROLE);
			user.roles.remove(AGAINST_ROLE);
			count++;
        });
    }
};