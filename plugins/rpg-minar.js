const handler = async (m, {conn, isPrems}) => {
  const hasil = Math.floor(Math.random() * 1000);
  const pp = 'https://telegra.ph/file/ed38c5ca8c9e07d1f22ec.jpg';
  const time = global.db.data.users[m.sender].lastmiming + 600000;
  if (new Date - global.db.data.users[m.sender].lastmiming < 600000) throw `*[ ⏰ ] 𝙴𝚜𝚙𝚎𝚛𝚊 ${msToTime(time - new Date())} 𝚙𝚊𝚛𝚊 𝚟𝚘𝚕𝚟𝚎𝚛 𝚊 𝚖𝚒𝚗𝚊𝚛*`;
  const text = `*_Mientras trabajabas duro obtubiste ${hasil} xp_*`;
  await conn.reply(m.chat,text,m,{ contextInfo:{ externalAdReply: {title: '𝐏𝐈𝐑𝐎𝐏𝐎', body: '𝙷𝙰𝙲𝙷𝙸𝙺𝙾-𝙱𝙾𝚃-𝙼𝙳', sourceUrl: global.md, thumbnail: imagen7 }}});
  global.db.data.users[m.sender].lastmiming = new Date * 1;
};
handler.help = ['minar'];
handler.tags = ['xp'];
handler.command = ['minar', 'miming', 'mine'];
handler.fail = null;
handler.exp = 0;
export default handler;

function msToTime(duration) {
  const milliseconds = parseInt((duration % 1000) / 100);
  let seconds = Math.floor((duration / 1000) % 60);
  let minutes = Math.floor((duration / (1000 * 60)) % 60);
  let hours = Math.floor((duration / (1000 * 60 * 60)) % 24);

  hours = (hours < 10) ? '0' + hours : hours;
  minutes = (minutes < 10) ? '0' + minutes : minutes;
  seconds = (seconds < 10) ? '0' + seconds : seconds;

  return minutes + ' m y ' + seconds + ' s ';
}
