module.exports = {
    name: 'poll',
    usage: '<emoji A> <option A>, <emoji B> <option B>, <emoji C> <option C>',
    description: 'Start a poll with up to (god knows how many) choices',
    cooldown: 1.5,
    args: true,
    execute(message, args) {

        let emotes = args.filter(value => /<a?:.+:\d+>/.test(value));
        
        //fuse message, then split on user-input commas
        let options = args.join(' ');
        let answer = "";
        options.split(',').forEach(element => {
            answer += element.trim() + "\n";
        });
        message.channel.send("Here's a poll:\n" + answer)
        .then(function (message) {
            emotes.forEach( emote =>
                message.react(emote)
            )
        }).catch((e)=> console.log(e));
	}
};