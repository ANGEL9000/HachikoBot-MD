import fetch from 'node-fetch';
const handler = async (m, {conn, usedPrefix, participants, isPrems}) => {
const {money, joincount} = global.db.data.users[m.sender];
const {exp, limit, level, role} = global.db.data.users[m.sender];
const text = `┏━━━━━━━━━━━━━━━━┓
┃ *𝕀ℕ𝔽𝕆 𝔻𝔼𝕃 𝕌𝕊𝕌𝔸ℝ𝕀𝕆*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣⟣❥ *🏁 𝙽𝙸𝚅𝙴𝙻:* ${level}
┣⟣❥ *🧿 𝙴𝚇𝙿𝙴𝚁𝙸𝙴𝙽𝙲𝙸𝙰:* ${exp}
┣⟣❥ *🗡️ 𝚁𝙰𝙽𝙶𝙾:* ${role}
┣⟣❥ *💎 𝙳𝙸𝙰𝙼𝙰𝙽𝚃𝙴𝚂:* ${limit}
┣⟣❥ *💰 𝙷𝙰𝙲𝙷𝙸𝙺𝙾𝙲𝙾𝙸𝙽𝚂:* ${money}
┣⟣❥ *🔮 𝚃𝙾𝙺𝙴𝙽𝚂:* ${joincount}
┣⟣❥ *🎟️ 𝙿𝚁𝙴𝙼𝙸𝚄𝙽:* ${user.premiumTime > 0 ? '✅' : (isPrems ? '✅' : '❌') || ''}
┗━━━━━━━━━━━━━━━━┛`
  conn.sendMessage(m.chat, {text: text}, {quoted: m});
 };
handler.help = ['profile [@user]'];
handler.tags = ['xp'];
handler.command = /^miinfo|infor?$/i;
export default handler; 
