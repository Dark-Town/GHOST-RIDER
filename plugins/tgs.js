























const { cmd } = require('../command');
const axios = require('axios');
const { getBuffer, sleep } = require('../lib/functions'); // Importez vos fonctions utilitaires nécessaires

const botToken = '891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4'; // Remplacez par le token de votre bot Telegram

cmd({
  pattern: 'tgs',
  react: '🤖',
  desc: 'Download and send stickers from a Telegram sticker pack',
  category: 'media',
  use: '.tgs <sticker_pack_link>',
  filename: __filename
}, async (conn, mek, m, { from, l, quoted, body, args }) => {
  try {
    // Vérifier que l'URL est fournie
    if (!args[0]) {
      return conn.sendMessage(from, { text: '❌ Please provide a valid sticker pack URL.' }, { quoted: mek });
    }

    const packUrl = args[0];
    const packName = packUrl.split('/').pop(); // Récupérer le nom du pack de stickers à partir de l'URL

    // Appel à l'API Telegram pour récupérer les stickers du pack
    const apiUrl = `https://api.telegram.org/bot${botToken}/getStickerSet?name=${packName}`;
    const response = await axios.get(apiUrl);

    // Vérifier si l'API a retourné un pack valide
    if (!response.data.ok) {
      return conn.sendMessage(from, { text: '❌ Unable to find the sticker pack. Please check the URL.' }, { quoted: mek });
    }

    const stickers = response.data.result.stickers;
    if (stickers.length === 0) {
      return conn.sendMessage(from, { text: '❌ This sticker pack does not contain any stickers.' }, { quoted: mek });
    }

    // Envoi de chaque sticker dans le chat
    for (let i = 0; i < stickers.length; i++) {
      const stickerFileId = stickers[i].file_id;
      const stickerData = await axios.get(`https://api.telegram.org/bot${botToken}/getFile?file_id=${stickerFileId}`);
      const filePath = stickerData.data.result.file_path;
      const stickerUrl = `https://api.telegram.org/file/bot${botToken}/${filePath}`;

      // Télécharger le sticker
      const stickerBuffer = await getBuffer(stickerUrl);

      // Envoyer le sticker dans le chat
      await conn.sendMessage(from, { sticker: stickerBuffer }, { quoted: mek });

      // Attendre un peu avant d'envoyer le prochain sticker
      await sleep(1000);
    }

    // Message de confirmation
    conn.sendMessage(from, { text: '✅ Stickers have been successfully sent!' }, { quoted: mek });
  } catch (e) {
    console.error(e);
    conn.sendMessage(from, { text: '❌ An error occurred while fetching the sticker pack. Please try again.' }, { quoted: mek });
  }
});