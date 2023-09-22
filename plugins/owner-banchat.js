const handler = async (m) => {
  global.db.data.chats[m.chat].isBanned = true;
  m.reply('[➡️] 𝐏𝐞𝐫𝐟𝐞𝐜𝐭𝐨, 𝐜𝐡𝐚𝐭 𝐛𝐚𝐧𝐞𝐚𝐝𝐨 𝐞𝐱𝐢𝐭𝐨𝐬𝐚𝐦𝐞𝐧𝐭𝐞.);
};
handler.help = ['banchat'];
handler.tags = ['owner'];
handler.command = /^banchat$/i;
handler.rowner = true;
export default handler;
