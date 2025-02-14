const TELEGRAM_BOT_TOKEN = '8128978509:AAEi6gjKMUgMAngsZga_GxLucXfORrFB2pg';
const TELEGRAM_API = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}`;
const CHAT_ID = '851162551'; // Numeric chat ID for the bot

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
}

export async function sendToTelegram(formData: FormData, selectedPlan: string): Promise<boolean> {
  try {
    const message = `
🎯 New Lead from VIKS AI!

Plan Selected: ${selectedPlan}

👤 Contact Information:
• Name: ${formData.name}
• Email: ${formData.email}
• Phone: ${formData.phone || 'Not provided'}
• Company: ${formData.company || 'Not provided'}

💬 Message:
${formData.message || 'No message provided'}
    `.trim();

    const response = await fetch(`${TELEGRAM_API}/sendMessage`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text: message,
        parse_mode: 'HTML',
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error('Telegram API error:', data);
      throw new Error(data.description || 'Failed to send message to Telegram');
    }

    return true;
  } catch (error) {
    console.error('Error sending to Telegram:', error);
    return false;
  }
}