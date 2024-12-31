const { cmd } = require('../command');




cmd({
    pattern: "promoteall",
    desc: "Promote all group members to admin.",
    react: "⬆️",
    category: "admin",
    use: ".promoteall",
    filename: __filename,
}, async (conn, mek, m, { isGroup, isBotAdmins, groupMetadata, participants, isOwner, reply }) => {
    try {
        // Check if the command is used in a group
        if (!isGroup) {
            return reply("❌ This command can only be used in a group.");
        }

        // Check if the bot has admin privileges
        if (!isBotAdmins) {
            return reply("❌ The bot needs to be an admin to perform this action.");
        }

        // Notify the user that the promotion process is starting
        reply("Promoting all members to admins...⏳");

        // Promote all group participants (excluding the bot itself)
        const membersToPromote = participants.filter(member => !groupMetadata.admins.includes(member.id));
        for (const member of membersToPromote) {
            try {
                await conn.groupParticipantsUpdate(m.chat, [member.id], "promote");
            } catch (e) {
                console.log(`❌ Error promoting ${member.id}:`, e.message);
            }
        }

        // Confirm the action
        reply(`✅ All members have been promoted to admins successfully.`);
    } catch (e) {
        console.error("Error in 'promoteall' command:", e.message);
        reply("❌ An error occurred while processing the command. Please try again.");
    }
});
cmd({
    pattern: "demoteall",
    desc: "Demote all admins in the group.",
    react: "⬇️",
    category: "admin",
    use: ".demoteall",
    filename: __filename,
}, async (conn, mek, m, { isGroup, isBotAdmins, groupAdmins, groupMetadata, isOwner, reply }) => {
    try {
        // Check if the command is used in a group
        if (!isGroup) {
            return reply("❌ This command can only be used in a group.");
        }

        // Check if the bot has admin privileges
        if (!isBotAdmins) {
            return reply("❌ The bot needs to be an admin to perform this action.");
        }

        // Get the list of current group admins
        const adminsToDemote = groupAdmins.filter(admin => admin !== groupMetadata.owner);

        // Check if there are any admins to demote
        if (adminsToDemote.length === 0) {
            return reply("✅ There are no other admins to demote.");
        }

        // Notify the user that the demotion process is starting
        reply("Demoting all admins...⏳");

        // Loop through all admins and demote them (excluding the owner and the bot itself)
        for (const admin of adminsToDemote) {
            try {
                await conn.groupParticipantsUpdate(m.chat, [admin], "demote");
            } catch (e) {
                console.log(`❌ Error demoting ${admin}:`, e.message);
            }
        }

        // Confirm the action
        reply(`✅ All admins have been demoted successfully.`);
    } catch (e) {
        console.error("Error in 'demoteall' command:", e.message);
        reply("❌ An error occurred while processing the command. Please try again.");
    }
});