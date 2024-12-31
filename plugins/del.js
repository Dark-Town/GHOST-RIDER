/*created by Kgtech 🕵
contact dev1 237656520674 ♻️
contact dev2 237650564445 ♻️
© Copy coder alert ⚠
*/




const config = require('../config');
const { cmd, commands } = require('../command');

cmd({
    pattern: "delete",
    react: "🧹",
    alias: ["del"],
    desc: "Delete a quoted message (works in groups and private chats).",
    category: "group",
    use: '.del',
    filename: __filename,
},
async (conn, mek, m, {
    from, quoted, reply, isOwner, isAdmins
}) => {
    try {
        // Ensure the command is used in response to a message
        if (!quoted) return reply(`❌ Please reply to the message you want me to delete.`);

        // Check if the user is the owner or admin in a group
        if (m.isGroup && !isOwner && !isAdmins) {
            return reply(`❌ This command can only be used by group admins or the bot owner.`);
        }

        // Construct the key of the message to delete
        const key = {
            remoteJid: m.chat, // Chat (group or private) where the message is located
            fromMe: quoted.key.fromMe, // Check if the message was sent by the bot
            id: quoted.key.id, // ID of the quoted message
            participant: quoted.key.participant || m.chat // Sender of the message
        };

        // Send the delete request
        await conn.sendMessage(from, { delete: key });

    } catch (e) {
        console.error('Error in delete command:', e);
        reply(`❌ Unable to delete the message.`);
    }
});