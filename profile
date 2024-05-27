<Your Profile>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Profile - FRIENDLY FIRE</title>
    <style>
        body {
            background-color: #222;
            color: #fff;
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            line-height: 1.6;
        }
        header, footer {
            background-color: #333;
            padding: 20px;
            text-align: center;
        }
        section {
            padding: 20px;
        }
        form {
            margin-bottom: 20px;
        }
        input[type="text"],
        textarea {
            width: 100%;
            padding: 10px;
            margin-bottom: 10px;
            border: none;
            background-color: #555;
            color: #fff;
        }
        button {
            padding: 10px 20px;
            border: none;
            background-color: #666;
            color: #fff;
            cursor: pointer;
        }
        button:hover {
            background-color: #888;
        }
    </style>
</head>
<body>
    <header>
        <h1>FRIENDLY FIRE</h1>
        <nav>
            <ul>
                <li><a href="index.html">Home</a></li>
                <li><a href="live-chat.html">Live Chat</a></li>
                <li><a href="game-sessions.html">Game Sessions</a></li>
                <li><a href="reviews.html">Reviews</a></li>
            </ul>
        </nav>
    </header>

    <section>
        <h2>Profile</h2>
        <form id="profileForm">
            <input type="text" id="profileUsername" placeholder="Your Name" required>
            <input type="text" id="profileGame" placeholder="Favorite Game">
            <input type="text" id="profileID" placeholder="In-Game ID/UID">
            <textarea id="profileBio" placeholder="Bio" rows="3"></textarea>
            <button type="submit">Save Profile</button>
        </form>
    </section>

    <footer>
        <p>Website created by Zodin</p>
    </footer>

    <script>
        // JavaScript code for profile functionality
    </script>
</body>
</html>
