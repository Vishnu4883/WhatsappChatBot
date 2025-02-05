<<<<<<< HEAD
Activates on start command.
Deactivates on stop or bye.

Step-by-Step List (Updated):😁
1. Install Node.js
Download and install Node.js from #nodejs.org.
Verify installation:
node -v
npm -v

2. Create Project Folder
Open VS Code and create a folder named ChatBot.
Open the terminal in VS Code (Terminal > New Terminal).

3. Initialize Node.js Project
Run:
npm init -y

4. Install Node Modules
Install the required libraries:
npm install whatsapp-web.js qrcode-terminal
This installs:
	whatsapp-web.js: To interact with WhatsApp Web.
	qrcode-terminal: To display the QR code in the terminal.

5. Write the Bot Code
Create a file named index.js and paste the updated code (provided earlier).


6. Run the Bot
Start the bot:
node index.js
Scan the QR code with your WhatsApp app.

7. Set Up GitHub
Create a GitHub repository (e.g., WhatsappChatBot).
Link your local project to GitHub:
git init
git remote add origin https://github.com/YOUR_USERNAME/WhatsappChatBot.git


8. Add .gitignore
Create a .gitignore file with:
node_modules/
.wwebjs_auth/
.wwebjs_cache/


9. Push Code to GitHub
Stage, commit, and push your code:
git add .
git commit -m "Initial commit"
git push -u origin main


10. Test and Update
Test the bot in individual chats and groups.
Make updates as needed (e.g., new menu items, help email).
Push updates to GitHub:
git add .
git commit -m "Added new features"
git push


Full Command List
Here’s a quick reference for all commands:
Project Setup
npm init -y
npm install whatsapp-web.js qrcode-terminal

Run the Bot
node index.js

GitHub Setup
git init
git remote add origin https://github.com/YOUR_USERNAME/WhatsappChatBot.git
git add .
git commit -m "Initial commit"
git push -u origin main

Update Code
git add .
git commit -m "Added new features"
git push

Let me know if you need further clarification! 😊
=======
# WhatsApp ChatBot 🤖

A WhatsApp chatbot built with Node.js and `whatsapp-web.js`.

## Features
- Activates on `start` command.
- Deactivates on `stop` or `bye`.
>>>>>>> 83fec29e57dde32ab8bf484a12348184b8c18a93
