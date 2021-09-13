module.exports = {
	name: 'watchend',
	guildOnly: true,
	creatorOnly : true,
	description: 'Remove the watchalong role from all members',
	execute(message) {
		var count = 1;
        message.guild.members.cache.each(user => {
			user.roles.remove(message.guild.roles.cache.find(role => role.name === "watchalong").id);
			count++;
        });
		message.channel.send(count +' cleared');
    }
};