// index.js
const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

const activeUsers = {};

const client = new Client({
  authStrategy: new LocalAuth(),
  puppeteer: { 
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  }
});

client.on('qr', (qr) => {
  qrcode.generate(qr, { small: true });
});

client.on('ready', () => {
  console.log('✅ Bot is ready!');
});

client.on('message', async (message) => {
  const userID = message.from;
  const userMessage = message.body.toLowerCase().trim();

  // Allow bot to respond in both individual and group chats
  if (message.fromMe) return;

  if (userMessage === 'start') {
    activeUsers[userID] = true;
    await message.reply(`🚀 Bot activated!\nCommands: *Menu*, *Help*, *Stop*`);
    return;
  }

  if (!activeUsers[userID]) return;

  if (userMessage === 'stop' || userMessage === 'bye') {
    delete activeUsers[userID];
    await message.reply('😊 Goodbye!');
    return;
  }

  switch(userMessage) {
    case 'menu':
      await message.reply(
        `📄 Services:\n` +
        `1. Live Cricket Score\n` +
        `2. తెలుగు వార్తలు\n` +
        `3. YouTube\n` +
        `4. Telugu New Movies`
      );
      break;
    case '1':
      await message.reply('Live Cricket Score: https://www.cricbuzz.com/');
      break;
    case '2':
      await message.reply('తెలుగు వార్తలు: https://www.eenadu.net/');
      break;
    case '3':
      await message.reply('YouTube: https://www.youtube.com/');
      break;
    case '4':
      await message.reply(
        `Telugu New Movies:\n` +
        `a. Moviezwap\n` +
        `b. Movierulz`
      );
      break;
    case 'a':
      await message.reply('Moviezwap: https://www.moviezwap.fyi/');
      break;
    case 'b':
      await message.reply('Movierulz: https://www.5movierulz.vu/');
      break;
    case 'help':
      await message.reply('📧 Contact: maraganivishnu2001@gmail.com');
      break;
    default:
      await message.reply(`ℹ️ Commands: *Menu*, *Help*, *Stop*`);
  }
});

// ⚠️ Add 2-second delay before starting
setTimeout(() => {
  client.initialize();
}, 2000);
