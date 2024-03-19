async function getTraduzirTexto(txt, linguagemA, linguagemT){
    const fetch = await import('node-fetch');

    const url = `https://api.mymemory.translated.net/get?q=${txt}&langpair=${linguagemA}|${linguagemT}`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '4bddf377ddmshba8614cb0857ae6p1d3bffjsn6daf8a2afdec',
            'X-RapidAPI-Host': 'translated-mymemory'
        }
    };
    
    try {
        const response = await fetch.default(url, options);
        const result = await response.json();
        return result.responseData.translatedText
    } catch (error) {
        console.error(error);
    }    
}

module.exports = {
    getTraduzirTexto
}