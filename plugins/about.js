const config = require('../config')
const {cmd , commands} = require('../command')
cmd({
    pattern: "about",
    react: "👑",
    desc: "get owner dec",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let madeMenu = `❁ ════ ❃•⇆•❃ ════ ❁

*👋 HELLO ${pushname}*\n\n *I AM CREW AWAIS 887*\n\n *I AM 16 YEARS OLD SWEET BOY 🔞*\n\n *I AM FROM MULTAN😁🙈*\n\n *I AM SIMPLE WHATSAPP BOT DEVELOPER👨‍💻*\n\n\n *THANK YOU.😊*

❁ ════ ❃•⇆•❃ ════ ❁

> *ᴘᴏᴡᴇʀᴇᴅ ʙʏ 𝚌𝚛𝚎𝚠 𝚊𝚠𝚊𝚒𝚜*

╰━❁ ═══ ❃•⇆•❃ ═══ ❁━╯
`

await conn.sendMessage(from,{image:{url:config.ALIVE_IMG},caption:madeMenu},{quoted:mek})

}catch(e){
console.log(e)
reply(`${e}`)
}
})
