






























const { cmd } = require("../command");
const os = require("os");
const moment = require("moment");

let botStartTime = Date.now(); // Enregistrement de l'heure de démarrage du bot

cmd({
    pattern: "alive",
    desc: "Check if the bot is active.",
    category: "info",
    react: "💡",
    filename: __filename
}, async (conn, mek, m, { reply }) => {
    try {
        // Heure actuelle
        const currentTime = moment().format("HH:mm:ss");
        const currentDate = moment().format("dddd, MMMM Do YYYY");

        // Runtime
        const runtimeMilliseconds = Date.now() - botStartTime;
        const runtimeSeconds = Math.floor((runtimeMilliseconds / 1000) % 60);
        const runtimeMinutes = Math.floor((runtimeMilliseconds / (1000 * 60)) % 60);
        const runtimeHours = Math.floor(runtimeMilliseconds / (1000 * 60 * 60));

        // Message Alive
        const aliveMessage = `
🌟 *KERM MD V4 STATUS* 🌟

🕒 *Time*: ${currentTime}
📅 *Date*: ${currentDate}
⏳ *Uptime*: ${runtimeHours} hours, ${runtimeMinutes} minutes, ${runtimeSeconds} seconds

🤖 *Status*: *Kerm is Alive and Ready!*

🎉 *Enjoy the Service!*
        `;

        // Envoyer le message
        await reply(aliveMessage.trim());
    } catch (error) {
        console.error(error);
        reply("❌ An error occurred while processing the alive command.");
    }
});