/* Creditos a https://github.com/unptoadrih15/UPABOT-MD */

const handler = async (m, {conn, isAdmin}) => {
  if (m.fromMe) return;
  if (isAdmin) throw '*[🐶] ¡𝙷𝙾𝙻𝙰 𝙾𝚆𝙽𝙴𝚁!,𝙲𝙾𝙼𝙾 𝙴𝚂𝚃𝙰? 𝚄𝚂𝚃𝙴𝙳 𝚈𝙰 𝙴𝚂 𝙰𝙳𝙼𝙸𝙽 𝙳𝙴 𝙴𝚂𝚃𝙴 𝙶𝚁𝚄𝙿𝙾*';
  try {
    await conn.groupParticipantsUpdate(m.chat, [m.sender], 'promote');
  } catch {
    await m.reply('*[❗] 𝙴𝚁𝚁𝙾𝚁, 𝙻𝙾 𝚂𝙸𝙴𝙽𝚃𝙾 𝙾𝚆𝙽𝙴𝚁, 𝙽𝙾 𝙵𝚄𝙴 𝙿𝙾𝚂𝙸𝙱𝙻𝙴 𝙳𝙰𝚁𝙻𝙴 𝙰𝙳𝙼𝙸𝙽*');
  }
};
handler.command = /^(tenerpoder|seradmin)$/i;
handler.rowner = true;
handler.group = true;
handler.botAdmin = true;
export default handler;
