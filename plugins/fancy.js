













const { cmd } = require('../command');
const axios = require('axios');

// Register the command
cmd({
    pattern: 'font',
    alias: ['fancy', 'font-txt'],
    react: '✍️',
    desc: 'Convert text into various fonts.', // Description of the command
    category: 'tools', // Command category
    filename: __filename // Filename for reference
}, async (_conn, _mek, _m, { from, quoted, body, args, q, reply }) => {
    try {
        // If the user did not provide text, show an error
        if (!q) return reply('Please provide text to convert into fonts.');

        // Fetch fonts from the API using the provided text
        let response = await axios.get(`https://www.dark-yasiya-api.site/other/font?text=${encodeURIComponent(q)}`);
        let result = response.data;

        // If the response doesn't have fonts, show an error
        if (!result.result) return reply('Error fetching fonts. Please try again later.');

        // Format the fonts for display
        let formattedFonts = result.result
            .map(font => `*${font.name}:*\n${font.font}`) // Add font name and its content
            .join('\n\n'); // Join multiple fonts with spacing

        // Reply with the formatted fonts and credit message
        reply(`*KERM_MD-V4 FANCY FONTS:*\n\n${formattedFonts}\n\n> *BY KG TECH*`);
    } catch (error) {
        // Log and display an error message if something goes wrong
        console.error(error);
        reply('An error occurred while fetching fonts.');
    }
});