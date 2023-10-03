var handler = async (m, { conn }) => {

if (!/viewOnce/.test(m.quoted?.mtype)) throw '*📍 𝚁𝙴𝚂𝙿𝙾𝙽𝙳𝙴 𝙰 𝚄𝙽𝙰 𝙵𝙾𝚃𝙾 𝙾 𝚅𝙸𝙳𝙴𝙾 𝚀𝚄𝙴 𝚃𝙸𝙴𝙽𝙴 𝙿𝙰𝚁𝙰 𝚅𝙴𝚁 𝚄𝙽𝙰 𝚅𝙴𝚉*'
let mtype = Object.keys(m.quoted.message)[0]
let buffer = await m.quoted.download()
let caption = m.quoted.message[mtype].caption || ''
conn.sendMessage(m.chat, { [mtype.replace(/Message/, '')]: buffer, caption }, { quoted: m })
	
}
handler.help = ['readviewonce']
handler.tags = ['herramientas']
handler.command = /^retrieve|readviewonce|ver/i

export default handler
