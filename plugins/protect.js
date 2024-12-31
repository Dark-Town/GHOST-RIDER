const fs = require('fs');
const { cmd } = require('../command');

// Chemin du fichier JSON
const protectedFile = './protected.json';

// Vérifier si le fichier JSON existe, sinon le créer
if (!fs.existsSync(protectedFile)) {
    fs.writeFileSync(protectedFile, JSON.stringify([], null, 2));
}

// Charger les groupes protégés
let protectedGroups = JSON.parse(fs.readFileSync(protectedFile));

cmd({
    pattern: "protected",
    desc: "Activate or deactivate group protection",
    category: "admin",
    use: ".protected on|off|status",
    filename: __filename
}, async (conn, mek, m, { args, isGroup, isAdmins, reply, groupMetadata }) => {
    if (!isGroup) return reply("❌ This command can only be used in groups.");
    if (!isAdmins) return reply("❌ Only group admins can use this command.");

    const groupId = groupMetadata.id;

    if (!args[0]) {
        return reply("❌ Please specify `on`, `off`, or `status`.");
    }

    switch (args[0].toLowerCase()) {
        case "on":
            if (protectedGroups.includes(groupId)) {
                return reply("🔒 This group is already protected.");
            }
            protectedGroups.push(groupId);
            fs.writeFileSync(protectedFile, JSON.stringify(protectedGroups, null, 2));
            reply("✅ Group protection is now activated.");
            break;

        case "off":
            if (!protectedGroups.includes(groupId)) {
                return reply("❌ This group is not protected.");
            }
            protectedGroups = protectedGroups.filter(id => id !== groupId);
            fs.writeFileSync(protectedFile, JSON.stringify(protectedGroups, null, 2));
            reply("✅ Group protection is now deactivated.");
            break;

        case "status":
            if (protectedGroups.includes(groupId)) {
                reply("🔒 Group protection is currently activated.");
            } else {
                reply("🔓 Group protection is currently deactivated.");
            }
            break;

        default:
            reply("❌ Invalid option. Use `on`, `off`, or `status`.");
    }
});