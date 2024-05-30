const express = require('express');
const http = require('http');
const WebSocket = require('ws');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

let onlineUsers = new Set();

app.post('/save-profile', (req, res) => {
    const { email, username } = req.body;
    // Save profile information in memory or database
    res.json({ success: true });
});

app.post('/submit-review', (req, res) => {
    const { username, gameTitle, reviewText } = req.body;
    // Save review information in memory or database
    res.json({ success: true });
});

app.get('/reviews', (req, res) => {
    // Retrieve reviews from memory or database
    const reviews = [];
    res.json(reviews);
});

wss.on('connection', (ws, req) => {
    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    console.log('New connection from:', ip);
    onlineUsers.add(ip);

    ws.on('message', (message) => {
        const receivedMessage = JSON.parse(message);
        switch (receivedMessage.type) {
            case 'chat':
                wss.clients.forEach((client) => {
                    if (client.readyState === WebSocket.OPEN) {
                        client.send(JSON.stringify({
                            type: 'chat',
                            sender: receivedMessage.sender,
                            content: receivedMessage.content,
                            timestamp: Date.now()
                        }));
                    }
                });
                break;
            case 'status':
                // Update user's online status
                break;
            case 'private_message':
                // Send private message to specific user
                break;
            default:
                console.log('Unknown message type:', receivedMessage.type);
        }
    });

    ws.on('close', () => {
        console.log('Connection closed from:', ip);
        onlineUsers.delete(ip);
    });
});

setInterval(() => {
    console.log('Online users:', onlineUsers.size);
}, 60000); // Log online users count every minute

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
