module.exports = {
	name: 'random',
	description: 'Send a random quote',
	execute(message, args) {
		const fs = require('fs');
		const Discord = require('discord.js');

		const rawdata1 = fs.readFileSync('quotes.json');
		const rawdata = JSON.parse(rawdata1);
		const number = Math.floor(Math.random() * 2);
		const quote = rawdata[number].quote;
		const episode = rawdata[number].episode;

		const exampleEmbed = new Discord.MessageEmbed()
			.setColor('#0099ff')
			.setTitle('HRejterzy')
			.setURL('https://www.codetwo.pl/praca/o-hr-wiemy-wszystko')
			.addFields(
				{ name: 'Cytat:', value:`${quote}` },
				{ name: 'Odcinek:', value: 'nic' },
			)
			.setTimestamp()
			.setFooter('By MarcinK50#9775', 'https://github.com/MarcinK50');

		message.channel.send(exampleEmbed);
	},
};