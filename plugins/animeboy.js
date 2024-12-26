const axios = require('axios');
const { cmd, commands } = require('../command');

cmd({
    pattern: "animeboy",
    desc: "Fetch a random anime boy image.",
    category: "fun",
    react: "♥️",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        const apiUrl = `https://api.waifu.pics/sfw/waifu`;
        const response = await axios.get(apiUrl);
        const data = response.data;

        await conn.sendMessage(from, { image: { url: data.url }, caption: '❤️ *GHOST RIDER RANDOM ANIME BOY IMAGES* ♥️\n\n\n *🧬©TcroneB HackX *' }, { quoted: mek });
    } catch (e) {
        console.log(e);
        reply(`*Error Fetching Anime Boy image*: ${e.message}`);
    }
});

cmd({
    pattern: "animeboy1",
    desc: "Fetch a random anime boy image.",
    category: "fun",
    react: "❤️",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        const apiUrl = `https://api.waifu.pics/sfw/waifu`;
        const response = await axios.get(apiUrl);
        const data = response.data;

        await conn.sendMessage(from, { image: { url: data.url }, caption: '❤️ *GHOST-RIDER RANDOM ANIME BOY IMAGES* ❤️\n\n\n *🧬©TcroneB HackX*' }, { quoted: mek });
    } catch (e) {
        console.log(e);
        reply(`*Error Fetching Anime Boy image*: ${e.message}`);
    }
});

cmd({
    pattern: "animeboyl2",
    desc: "Fetch a random anime boy image.",
    category: "fun",
    react: "❤️",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        const apiUrl = `https://api.waifu.pics/sfw/waifu`;
        const response = await axios.get(apiUrl);
        const data = response.data;

        await conn.sendMessage(from, { image: { url: data.url }, caption: '❤️ *GHOST-RIDER RANDOM ANIME BOY IMAGES* ❤️\n\n\n *🧬©TcroneB HackX*' }, { quoted: mek });
    } catch (e) {
        console.log(e);
        reply(`*Error Fetching Anime Boy image*: ${e.message}`);
    }
});

cmd({
    pattern: "animeboy3",
    desc: "Fetch a random anime girl image.",
    category: "fun",
    react: "❤️",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        const apiUrl = `https://api.waifu.pics/sfw/waifu`;
        const response = await axios.get(apiUrl);
        const data = response.data;

        await conn.sendMessage(from, { image: { url: data.url }, caption: '❤️ *GHOST-RIDER RANDOM ANIME BOY IMAGES* ❤️\n\n\n *🧬©TcroneB HackX*' }, { quoted: mek });
    } catch (e) {
        console.log(e);
        reply(`*Error Fetching Anime Girl image*: ${e.message}`);
    }
});

cmd({
    pattern: "animeboy4",
    desc: "Fetch a random anime boy image.",
    category: "fun",
    react: "❤️",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        const apiUrl = `https://api.waifu.pics/sfw/waifu`;
        const response = await axios.get(apiUrl);
        const data = response.data;

        await conn.sendMessage(from, { image: { url: data.url }, caption: '❤️ *GHOST-RIDER RANDOM ANIME BOY IMAGES* ❤️\n\n\n *🧬©TcroneB HackX*' }, { quoted: mek });
    } catch (e) {
        console.log(e);
        reply(`*Error Fetching Anime boy image*: ${e.message}`);
    }
});

cmd({
    pattern: "animeBoy5",
    desc: "Fetch a random anime boy image.",
    category: "fun",
    react: "❤️",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        const apiUrl = `https://api.waifu.pics/sfw/waifu`;
        const response = await axios.get(apiUrl);
        const data = response.data;

        await conn.sendMessage(from, { image: { url: data.url }, caption: '❤️ *GHOST-RIDER RANDOM ANIME BOYS IMAGES* 👸\n\n\n *🧬©TcroneB HackX*' }, { quoted: mek });
    } catch (e) {
        console.log(e);
        reply(`*Error Fetching Anime Boy image*: ${e.message}`);
    }
});
