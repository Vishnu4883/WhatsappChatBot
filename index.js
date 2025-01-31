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

  if (message.fromMe || message.isGroupMsg) return;

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
      await message.reply(`📄 Services:\n- Order Tracking\n- Support\n- FAQ`);
      break;
    case 'help':
      await message.reply('📧 Contact: support@example.com');
      break;
    default:
      await message.reply(`ℹ️ Commands: *Menu*, *Help*, *Stop*`);
  }
});

// ⚠️ Add 2-second delay before starting
setTimeout(() => {
  client.initialize();
}, 2000);