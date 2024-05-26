<CONTACT US AT INSTA @FriendlyFireOfficial>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>FRIENDLY FIRE</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            margin: 0;
            padding: 0;
        }
        header {
            background-color: #333;
            color: #fff;
            padding: 10px 0;
            text-align: center;
        }
        .container {
            width: 80%;
            margin: auto;
            overflow: hidden;
            padding: 20px;
        }
        .review-form, .review-list, .chat-section, .ads {
            background: #fff;
            margin: 20px 0;
            padding: 20px;
            border-radius: 5px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        .review-form h2, .review-list h2, .chat-section h2, .ads h2 {
            margin-top: 0;
        }
        .review-form input, .review-form textarea, .chat-section input, .chat-section textarea {
            width: 100%;
            padding: 10px;
            margin: 10px 0;
            border: 1px solid #ccc;
            border-radius: 5px;
        }
        .review-form button, .chat-section button {
            padding: 10px 20px;
            background: #333;
            color: #fff;
            border: none;
            border-radius: 5px;
            cursor: pointer;
        }
        .review-item, .chat-message {
            margin-bottom: 20px;
            border-bottom: 1px solid #ccc;
            padding-bottom: 10px;
        }
        footer {
            text-align: center;
            padding: 10px 0;
            background-color: #333;
            color: #fff;
            position: fixed;
            bottom: 0;
            width: 100%;
        }
    </style>
</head>
<body>
    <header>
        <h1>FRIENDLY FIRE</h1>
        <p>A place for gamers to share and connect</p>
    </header>

    <div class="container">
        <div class="review-form">
            <h2>Share Your Gaming Experience</h2>
            <form id="reviewForm">
                <input type="text" id="username" placeholder="Your Name" required>
                <input type="text" id="game" placeholder="Game Title" required>
                <input type="text" id="inGameID" placeholder="In-Game ID/UID">
                <textarea id="review" placeholder="Your Review" rows="5" required></textarea>
                <button type="submit">Submit</button>
            </form>
        </div>

        <div class="review-list">
            <h2>Community Reviews</h2>
            <div id="reviews"></div>
        </div>

        <div class="chat-section">
            <h2>Chat with Other Gamers</h2>
            <div id="chatMessages"></div>
            <form id="chatForm">
                <input type="text" id="chatUsername" placeholder="Your Name" required>
                <textarea id="chatMessage" placeholder="Your Message" rows="3" required></textarea>
                <button type="submit">Send</button>
            </form>
        </div>

        <div class="ads">
            <h2>Advertisements</h2>
            <p>Ad space available. Contact us for more information.</p>
        </div>
    </div>

    <footer>
        <p>Website created by Zodin</p>
    </footer>

    <script>
        document.getElementById('reviewForm').addEventListener('submit', function(event) {
            event.preventDefault();

            const username = document.getElementById('username').value;
            const game = document.getElementById('game').value;
            const inGameID = document.getElementById('inGameID').value;
            const review = document.getElementById('review').value;

            const reviewItem = document.createElement('div');
            reviewItem.classList.add('review-item');
            reviewItem.innerHTML = `
                <h3>${game} - Reviewed by ${username}</h3>
                <p>${review}</p>
                ${inGameID ? `<p><strong>In-Game ID:</strong> ${inGameID}</p>` : ''}
            `;

            document.getElementById('reviews').appendChild(reviewItem);

            document.getElementById('reviewForm').reset();
        });

        document.getElementById('chatForm').addEventListener('submit', function(event) {
            event.preventDefault();

            const chatUsername = document.getElementById('chatUsername').value;
            const chatMessage = document.getElementById('chatMessage').value;

            const chatMessageItem = document.createElement('div');
            chatMessageItem.classList.add('chat-message');
            chatMessageItem.innerHTML = `
                <p><strong>${chatUsername}:</strong> ${chatMessage}</p>
            `;

            document.getElementById('chatMessages').appendChild(chatMessageItem);

            document.getElementById('chatForm').reset();
        });
    </script>
</body>
</html>

