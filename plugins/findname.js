





























const { cmd } = require("../command");
const axios = require("axios");

cmd({
    pattern: "fname",
    alias: ["findname"],
    desc: "Find the nationality based on the name.",
    category: "fun",
    react: "🌍",
    filename: __filename
}, async (conn, mek, m, { reply, text }) => {
    try {
        // Vérifier si un nom est fourni
        if (!text || text.trim() === "") {
            return reply("❌ *Please provide a name to find the nationality.*\nExample: .fname Rayan");
        }

        // Utiliser l'API pour obtenir la nationalité basée sur le nom
        const apiUrl = `https://api.nationalize.io/?name=${text.trim()}`;
        const response = await axios.get(apiUrl);
        const data = response.data;

        // Vérifier si des résultats sont trouvés
        if (data.country.length === 0) {
            return reply(`❌ *No nationalities found for the name ${text.trim()}.*`);
        }

        // Extraire les informations
        const nationality = data.country.map(country => `🇺🇸 ${country.country_id} (${(country.probability * 100).toFixed(2)}%)`).join("\n");

        // Envoyer la réponse avec les nationalités trouvées
        reply(`🌍 *Nationality prediction for ${text.trim()}*: \n\n${nationality}`);
    } catch (error) {
        console.error(error);
        reply("⚠️ *An error occurred while fetching the nationality. Please try again later.*");
    }
});