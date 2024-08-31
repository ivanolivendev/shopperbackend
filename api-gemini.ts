const axios = require('axios');

async function sendImageToGemini(imageBase64, apiKey) {
    const url = 'https://api.gemini.com/v1/vision'; // Substitua pela URL correta da API
    try {
        const response = await axios.post(url, {
            image: imageBase64
        }, {
            headers: {
                'Authorization': `Bearer ${apiKey}`,
                'Content-Type': 'application/json'
            }
        });
        return response.data; // Processar a resposta conforme necessário
    } catch (error) {
        console.error('Erro ao enviar imagem para a API do Gemini:', error);
        throw new Error('Erro na integração com a API do Gemini');
    }
}