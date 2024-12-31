const fs = require('fs');
const path = require('path');
const config = require('../config');
const { cmd } = require('../command');

// Chemin du fichier sudo.json
const sudoPath = path.resolve(__dirname, '../sudo.json');

// Commande Setsudo
cmd({
    pattern: "setsudo",
    desc: "Add a user to the sudo list",
    category: "admin",
    use: ".setsudo @user or reply",
    filename: __filename
}, async (conn, mek, m, { sender, reply, args, quoted }) => {
    try {
        console.log("Sender detected:", sender);
        console.log("Owner list from config:", config.owners);

        if (!config.owners.includes(sender)) {
            return reply("❌ Only the owner can use this command.");
        }

        let target = args[0]?.replace(/[@\s]/g, '') + "@s.whatsapp.net";
        if (quoted && quoted.sender) {
            target = quoted.sender;
        }

        if (!target) {
            return reply("❌ Please mention a user or reply to their message.");
        }

        let sudoList = [];
        if (fs.existsSync(sudoPath)) {
            sudoList = JSON.parse(fs.readFileSync(sudoPath, 'utf-8'));
        }

        if (sudoList.includes(target)) {
            return reply("⚠️ User is already in the sudo list.");
        }

        sudoList.push(target);
        fs.writeFileSync(sudoPath, JSON.stringify(sudoList, null, 2));
        reply(`✅ ${target.split('@')[0]} has been added to the sudo list.`);
    } catch (e) {
        console.error("Error in setsudo command:", e);
        reply("❌ An error occurred while processing your request.");
    }
});

// Commande Delsudo
cmd({
    pattern: "delsudo",
    desc: "Remove a user from the sudo list",
    category: "admin",
    use: ".delsudo @user or reply",
    filename: __filename
}, async (conn, mek, m, { sender, reply, args, quoted }) => {
    try {
        console.log("Sender detected:", sender);
        console.log("Owner list from config:", config.owners);

        if (!config.owners.includes(sender)) {
            return reply("❌ Only the owner can use this command.");
        }

        let target = args[0]?.replace(/[@\s]/g, '') + "@s.whatsapp.net";
        if (quoted && quoted.sender) {
            target = quoted.sender;
        }

        if (!target) {
            return reply("❌ Please mention a user or reply to their message.");
        }

        if (!fs.existsSync(sudoPath)) {
            return reply("⚠️ No sudo users found.");
        }
        let sudoList = JSON.parse(fs.readFileSync(sudoPath, 'utf-8'));

        if (!sudoList.includes(target)) {
            return reply("⚠️ User is not in the sudo list.");
        }

        sudoList = sudoList.filter(user => user !== target);
        fs.writeFileSync(sudoPath, JSON.stringify(sudoList, null, 2));
        reply(`✅ ${target.split('@')[0]} has been removed from the sudo list.`);
    } catch (e) {
        console.error("Error in delsudo command:", e);
        reply("❌ An error occurred while processing your request.");
    }
});

// Commande Getsudo
cmd({
    pattern: "getsudo",
    desc: "Get the list of all sudo users",
    category: "admin",
    use: ".getsudo",
    filename: __filename
}, async (conn, mek, m, { sender, reply }) => {
    try {
        console.log("Sender detected:", sender);

        if (!config.owners.includes(sender)) {
            return reply("❌ Only the owner can use this command.");
        }

        if (!fs.existsSync(sudoPath)) {
            return reply("⚠️ No sudo users found.");
        }
        const sudoList = JSON.parse(fs.readFileSync(sudoPath, 'utf-8'));

        if (sudoList.length === 0) {
            return reply("⚠️ No sudo users found.");
        }

        // Création de la liste des utilisateurs sudo
        const sudoDisplay = sudoList
            .map((user, index) => `${index + 1}. ${user.split('@')[0]}`)
            .join('\n');

        reply(`✅ *List of Sudo Users:*\n\n${sudoDisplay}`);
    } catch (e) {
        console.error("Error in getsudo command:", e);
        reply("❌ An error occurred while fetching the sudo list.");
    }
});