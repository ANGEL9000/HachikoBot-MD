import axios from 'axios';

const getNews = async () => {
    try {
        const response = await axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=7431d08180fe4befa2cf03979943b1c8');
        const news = `Título: ${article.title}
            Enlace: ${article.url}
            Fuente: ${article.source.name}`
         conn.sendMessage(m.chat, {text: news}, {quoted: m});   
    } catch (error) {
        console.log('Hubo un error al obtener las noticias', error);
    }
};

getNews();
 
handler.command = ['new','news','noticia'];
export default handler;
