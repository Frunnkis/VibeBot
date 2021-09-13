module.exports = {
    name: 'horny',
    usage: 'optional: <user>',
    description: 'Call them out for being horny on main',
    aliases: ['bonk'],
    cooldown: 0.5,
	execute(message, args) {
        if (message.mentions.users.size) {
            const avatarList = message.mentions.users.map(user => {
                message.channel.send(`${user.username} is going to horny jail`);
            });
        }
        var answers = [
            'https://tenor.com/view/horny-senchou-hololive-senchou-marine-react-horny-gif-17261227',
            'https://tenor.com/view/sad-cat-bonk-hammer-crying-cat-gif-17177807',
            'https://tenor.com/view/hololive-kiryu-coco-horny-point-vtuber-gif-17764367',
            'https://tenor.com/view/bonk-meme-dog-doge-gif-14889944',
            'https://tenor.com/view/go-to-horny-jail-gif-19378983',
            'https://tenor.com/view/bonk-guillotine-sfw-hornyjail-boing-gif-19916234',
            'https://cdn.discordapp.com/attachments/439872388390191116/805889233385553950/image0.gif',
            'https://cdn.discordapp.com/attachments/439872388390191116/805889292933136384/image0.gif',
            'https://cdn.discordapp.com/attachments/439872388390191116/805889404451291157/image0.gif',
            'https://tenor.com/view/oreimo-dumb-stupid-smack-slap-gif-10937039'
        ]

        var randomAnswer = answers[Math.floor(Math.random() * answers.length)];

        message.channel.send(randomAnswer);

        setTimeout(() => {message.delete();}, 200);
	}
};