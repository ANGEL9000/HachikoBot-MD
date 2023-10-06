import fetch from 'node-fetch';
const handler = async (m, {conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems}) => {
  try {
  if (usedPrefix == 'a' || usedPrefix == 'A') return;

  const date = d.toLocaleDateString(locale, {day: 'numeric', month: 'long', year: 'numeric'});
  const {money, joincount} = global.db.data.users[m.sender];
  const {exp, limit, level, role} = global.db.data.users[m.sender];
  const pp = await conn.profilePictureUrl(conn.user.jid).catch(_ => 'https://telegra.ph/file/24fa902ead26340f3df2c.png');
  const fkon = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: `status@broadcast` } : {}) }, message: { 'contactMessage': { 'displayName': wm, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${wm},;;;\nFN:${wm},\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabell:Ponsel\nEND:VCARD`, 'jpegThumbnail': imagen1, thumbnail: imagen1 ,sendEphemeral: true}}};
    //await conn.reply(m.chat, '*En breve se enviara el menu. . .*',m, { contextInfo:{ forwardingScore: 2022, isForwarded: true, externalAdReply: {title: '👋 Hola!!', body: 'bienvenido', sourceUrl: global.md, thumbnail: await (await fetch(pp)).buffer() }}})
  async function loading() {
var hawemod = [
"2️⃣0️⃣ %",
"4️⃣0️⃣ %",
"6️⃣0️⃣ %",
"8️⃣0️⃣ %",
"1️⃣0️⃣0️⃣ %"
]
  
 //conn.reply(m.chat, `*╭──*`, m, { contextInfo:{ externalAdReply: {title: '𝐑𝐄𝐅𝐑𝐀𝐍', body: '𝙷𝙰𝙲𝙷𝙸𝙺𝙾-𝙱𝙾𝚃-𝙼𝙳', sourceUrl: global.md, thumbnail: imagen7}}})  
  let { key } = await conn.sendMessage(m.chat, {text: `cargando el menu`}, {quoted: m})
 for (let i = 0; i < hawemod.length; i++) {
   await new Promise(resolve => setTimeout(resolve, 1000)); 
   await conn.sendMessage(m.chat, {text: hawemod[i], edit: key}, {quoted: m}); 
  }
  await conn.sendMessage(m.chat, {text: doxeo, edit: key, mentions: conn.parseMention(doxeo)}, {quoted: m});         
 }
loading();  
//m.react('🐶');
    await conn.sendMessage(m.chat, { react: { text: '🐶', key: m.key } })
  let txt =`┏━━━━━━━━━━━━━━━━━━┓
┣⟣☯︎ *𝙾𝚆𝙽𝙴𝚁:* 𝙷𝙰𝙲𝙷𝙴𝙹𝙾𝚃𝙰
┣⟣☯︎ *𝙽𝚄𝙼𝙴𝚁𝙾:* +51 992 004 117
┣⟣☯︎ *𝙸𝙳𝙸𝙾𝙼𝙰:* 𝙴𝚂𝙿𝙰𝙽̃𝙾𝙻 
┣⟣☯︎ *𝙼𝙾𝙳𝙾:* 𝙿𝚄𝙱𝙻𝙸𝙲𝙾
┣⟣☯︎ *𝙵𝙴𝙲𝙷𝙰:* ${date}
┗━━━━━━━━━━━━━━━━━━┛`;
   await conn.sendMessage(m.chat, {text: txt.trim(), mentions: [...txt.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net'), contextInfo: {forwardingScore: 9999999, isForwarded: true, mentionedJid: [...txt.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net'), "externalAdReply": {"showAdAttribution": true, "containsAutoReply": true, "renderLargerThumbnail": true, "title": '乂 𝙷 𝙰 𝙲 𝙷 𝙸 𝙺 𝙾 - 𝙱 𝙾 𝚃 - 𝙼 𝙳 乂', "containsAutoReply": true, "mediaType": 1, "thumbnail": [imagen6,imagen1,imagen4].getRandom(), "mediaUrl": global.gp1, "sourceUrl": global.gp1}}}, {quoted: fkon});
 // m.react('🎮');
  } catch {
    conn.reply(m.chat, '*[❗𝐈𝐍𝐅𝐎❗] 𝙴𝙻 𝙼𝙴𝙽𝚄 𝚃𝙸𝙴𝙽𝙴 𝚄𝙽 𝙴𝚁𝚁𝙾𝚁 𝙿𝙾𝚁𝙵𝙰𝚅𝙾𝚁 𝚄𝚂𝙴 𝙴𝙻 .allmenu*', m);
  }
};
handler.help = ['menu'];
handler.tags = ['menu'];
handler.command = /^(pm|mp)$/i;
export default handler;
                                                                                                                                                                                                                                                                
