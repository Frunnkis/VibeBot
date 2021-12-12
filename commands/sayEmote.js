module.exports = {
    name: 'sayEmote',
    usage: '<emotes>',
    description: 'Return an emote from cache',
    args: true,
    execute(message, args) {
        const manager = require("../utility/safeOperations");

        var msg = args.replace('`', '');
        manager.checkedSend(message, "asdf"  + msg);
    }
}