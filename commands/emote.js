module.exports = {
    name: 'emote',
    usage: '<emotes>',
    description: 'Return an emote from cache',
    args: true,
    execute(message, args) {
        const manager = require("../utility/safeOperations");

        var emo = message.guild.emojis.cache.find(emoji => emoji.name == args)
        manager.checkedSend(message, "Emote: " +
            `\`${emo}\``
        );
    }
}