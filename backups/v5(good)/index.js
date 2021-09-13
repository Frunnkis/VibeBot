const fs = require('fs');
const Discord = require('discord.js');
const { prefix, token } = require('./config.json');

const client = new Discord.Client();
client.commands = new Discord.Collection;

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
const cooldowns = new Discord.Collection();

//Gang War Exports
module.exports.FOR_ROLE = '719075302730498142';
module.exports.AGAINST_ROLE = '719075105074053181';
module.exports.reactionFor = 'smug';
module.exports.reactionAgainst = 'AAAAAAA';

//rd channel export
const degeneracy = '439872388390191116';
module.exports.degeneracy = degeneracy;

//Image embed template
module.exports.imageEmbed = new Discord.MessageEmbed().setColor('#6afa57');

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

client.once('ready', () => {
    //set status
    client.user.setActivity('you fuckin WEEBS', { type: 'WATCHING'});
    console.log('Ready!');
    const channelRD = client.channels.cache.get(degeneracy);
    channelRD.send(`I'm awake!`);
    
    module.exports.channelRD = channelRD;
});

client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const commandName = args.shift().toLowerCase();

    const command = client.commands.get(commandName)
        || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

    if (!command) return;
    
    
    if (command.ownerOnly && (message.author.id != message.guild.ownerID))
        return message.reply('This command can only be run by the server owner!');
        
    if (command.guildOnly && message.channel.type !== 'text') {
        return message.reply('That\'s a server only command you dingus');
    }

    if (command.args && !args.length) {
        let reply = `You didn't provide any arguments, ${message.author}, you absolute fucking imbecile`;
    
        if (command.usage) {
            reply += `\n usage: \`${prefix}${commandName} ${command.usage}\``;
        }

        return message.channel.send(reply);
    }

    if (!cooldowns.has(command.name)) {
        cooldowns.set(command.name, new Discord.Collection());
    }

    const now = Date.now();
    const timestamps = cooldowns.get(command.name);
    const cooldownAmount = (command.cooldown || 3) * 1000;
    
    if (timestamps.has(message.author.id)) {
        const expirationTime = timestamps.get(message.author.id) + cooldownAmount;
        
        if (now < expirationTime) {
            const timeLeft = (expirationTime - now) / 1000;
            return message.reply(`please wait ${timeLeft.toFixed(1)} more second(s) before using \`${command.name}\` command.`);
        }
    }

    timestamps.set(message.author.id, now);
    setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);
    
    try { 
        command.execute(message, args);
    } catch (error) {
        console.error(error);
        message.reply('Command no worky :(');
    }
});

client.login(token);