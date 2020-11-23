/*
	By Marcin "MarcinK50" Kowalicki
	on license GNU(Generalnie Najebany Użytkownik)
*/
module.exports = {
	name: 'random',
	description: 'Send a random quote',
	execute(message, args) {
		const fs = require('fs');
		const Discord = require('discord.js');

		const rawData = fs.readFileSync('quotes.json'); // Import JSON with quotes
		const parsedData = JSON.parse(rawData); // Parse data from JSON
		const random = Math.floor(Math.random() * 5); // Generate random number
		const quote = parsedData[random].quote; 
		const episode = parsedData[random].episode;

		const exampleEmbed = new Discord.MessageEmbed()
			.setColor('#0099ff')
			.setTitle('HRejterzy')
			.setURL('https://www.codetwo.pl/praca/o-hr-wiemy-wszystko')
			.addFields(
				{ name: 'Cytat:', value:`${quote}` },
				{ name: 'Odcinek:', value: `${episode}` },
			)
			.setTimestamp()
			.setFooter('By MarcinK50#9775', 'https://github.com/MarcinK50');

		message.channel.send(exampleEmbed); // Send embed
	},
};
