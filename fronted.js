document.addEventListener('DOMContentLoaded', () => {
    const profileForm = document.getElementById('profileForm');
    const reviewForm = document.getElementById('reviewForm');
    const chatInput = document.getElementById('chatInput');
    const chatWindow = document.getElementById('chatWindow');
    const sendButton = document.getElementById('sendButton');
    const logoutButton = document.getElementById('logoutButton');
    let ws;

    // WebSocket setup
    function setupWebSocket() {
        ws = new WebSocket('ws://localhost:3000');
        ws.onmessage = (event) => {
            const message = JSON.parse(event.data);
            switch (message.type) {
                case 'chat':
                    appendMessage(message.sender, message.content, message.timestamp);
                    break;
                default:
                    console.log('Unknown message type:', message.type);
            }
        };
    }

    function appendMessage(sender, content, timestamp) {
        const messageDiv = document.createElement('div');
        messageDiv.textContent = `${sender}: ${content} (${new Date(timestamp).toLocaleTimeString()})`;
        chatWindow.appendChild(messageDiv);
        chatWindow.scrollTop = chatWindow.scrollHeight;
    }

    // Load profile
    function loadProfile() {
        const profile = JSON.parse(localStorage.getItem('profile'));
        if (profile) {
            document.getElementById('email').value = profile.email;
            document.getElementById('username').value = profile.username;
            profileForm.style.display = 'none';
            logoutButton.style.display = 'block';
        }
    }

    // Save profile
    profileForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('email').value;
        const username = document.getElementById('username').value;
        localStorage.setItem('profile', JSON.stringify({ email, username }));
        fetch('/save-profile', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, username })
        }).then(() => {
            profileForm.style.display = 'none';
            logoutButton.style.display = 'block';
        });
    });

    // Submit review
    reviewForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const profile = JSON.parse(localStorage.getItem('profile'));
        const gameTitle = document.getElementById('gameTitle').value;
        const reviewText = document.getElementById('reviewText').value;
        if (!profile) {
            alert('Please set up your profile first.');
            return;
        }
        fetch('/submit-review', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username: profile.username, gameTitle, reviewText })
        }).then(() => {
            document.getElementById('gameTitle').value = '';
            document
