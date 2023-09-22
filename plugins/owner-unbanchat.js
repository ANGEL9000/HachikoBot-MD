const handler = async (m) => {
  global.db.data.chats[m.chat].isBanned = false;
  m.reply('[➡️] 𝐏𝐞𝐫𝐟𝐞𝐜𝐭𝐨, 𝐜𝐡𝐚𝐭 𝐝𝐞𝐬𝐛𝐚𝐧𝐞𝐚𝐝𝐨 𝐞𝐱𝐢𝐭𝐨𝐬𝐚𝐦𝐞𝐧𝐭𝐞.');
};
handler.help = ['unbanchat'];
handler.tags = ['owner'];
handler.command = /^unbanchat$/i;
handler.rowner = true;
export default handler;
