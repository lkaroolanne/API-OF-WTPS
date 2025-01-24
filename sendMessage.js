const axios = require('axios'); // Importa a biblioteca axios

// Variáveis de configuração
const accessToken = 'EAAIEPOlZAq6MBO2iqdeZBqIYGa6tQRRpTMcRXlZAFxw1SlhAhQoaCPF0cyfRrDFTp7IE4qei6ZCxQqEuPt3Gw31N18NVkZBenZApGJrWCOY9m5uFYZBBCvQZAv7hTLGiNK4ZBwV9JNkhDpbHK8oR4KUJkevOx1t6OIa7KSBPBHXQjvUGAs4BT01UZAAtQg2Bl8heZByfgZDZD'; // Substitua com o novo token de acesso
const phoneNumberId = '581084118411510'; // ID do número de telefone
const recipients = [
  '5513991275578', 
  '5513991077820', 
  '5513976000474', 
  '5511943537326', 
  '5511915700707'
]; // Números de telefone que receberão a mensagem

async function sendMassMessages() {
  for (const recipient of recipients) {
    try {
      const response = await axios.post(
        `https://graph.facebook.com/v21.0/${phoneNumberId}/messages`, // Use o ID do número diretamente
        {
          messaging_product: 'whatsapp',
          to: recipient,
          type: 'template',
          template: {
            name: 'onbording', // Nome do seu template aprovado
            language: { code: 'pt_br' } // Idioma do template
          }
        },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            'Content-Type': 'application/json'
          }
        }
      );

      console.log(`Mensagem enviada com sucesso para ${recipient}:`, response.data);
    } catch (error) {
      console.error(`Erro ao enviar mensagem para ${recipient}:`, error.response ? error.response.data : error.message);
    }
  }
}

sendMassMessages();
