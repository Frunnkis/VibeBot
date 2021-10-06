const { Console } = require('console');
const { prefix } = require('../config.json');
module.exports = {
    name: 'help',
    description: 'List all commands or info for a specific command.',
    aliases: ['commands'],
    usage: '`[command name]`',
    cooldown: 3,
    execute(message, args) {
        const manager = require("../utility/safeOperations");
        const data = [];
        const { commands } = message.client;

        if (!args.length) {
            data.push('Here\'s a list of all commands:```');
            data.push(commands.map(command => command.name).join('\n'));
            data.push(`\`\`\`You can send \`${prefix}help [command name]\` to get info on a specific command!`);
        
            //message.author.send("test");
            return manager.checkedSend(message, data.join('\n'))
        }
        const name = args[0].toLowerCase();
        const command = commands.get(name) || commands.find(c => c.aliases && c.aliases.includes(name));

        if (!command) {
            return message.reply('That\'s not a valid command.');
        }

        data.push(`**Name:** ${command.name}`);

        if (command.aliases) data.push(`**Aliases:** ${command.aliases.join(', ')}`);
        if (command.description) data.push(`**Description:** ${command.description}`);
        if (command.usage) data.push(`**Usage:** ${prefix}${command.name} ${command.usage}`);

        data.push(`**Cooldown:** ${command.cooldown || 3} second(s)`);
        manager.checkedSend(message, data.join('\n'));

    }
}