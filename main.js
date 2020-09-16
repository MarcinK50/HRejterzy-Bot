const fs = require('fs');
const { Client, MessageEmbed, Collection } = require('discord.js');
const { prefix, token } = require('./config.json');

const client = new Client();
client.commands = new Collection();

const commandFiles = fs
	.readdirSync('./commands')
	.filter((file) => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

client.once('ready', () => {
	console.log('Ready!');
});

//  GitHub API user
client.on('message', (message) => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).split(/ +/);
	const command = args.shift().toLowerCase();

	if (command === 'random') {
		client.commands.get('random').execute(message, args);
	}
});

client.login(token);
