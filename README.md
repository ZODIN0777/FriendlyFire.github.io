<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>FRIENDLY FIRE - Official Website</title>
    <style>
        /* General Styles */
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
        nav ul {
            list-style-type: none;
            padding: 0;
            margin: 0;
            background-color: #444;
            text-align: center;
            border-bottom: 2px solid #666;
        }
        nav ul li {
            display: inline-block;
            margin-right: 10px;
        }
        nav ul li a {
            display: block;
            padding: 10px 20px;
            color: #fff;
            text-decoration: none;
            transition: background-color 0.3s ease;
        }
        nav ul li a:hover {
            background-color: #666;
        }
        section {
            padding: 20px;
        }
        form {
            margin-bottom: 20px;
        }
        input[type="text"],
        input[type="datetime-local"],
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
        /* Live Chat Styles */
        #chatMessages {
            max-height: 200px;
            overflow-y: auto;
            background-color: #333;
            padding: 10px;
            margin-bottom: 20px;
        }
        #chatMessages p {
            margin: 5px 0;
        }
        /* Profile Styles */
        #profileForm {
            display: none;
        }
        /* Game Sessions Styles */
        #sessionList {
            max-height: 200px;
            overflow-y: auto;
            background-color: #333;
            padding: 10px;
            margin-bottom: 20px;
        }
        #sessionList p {
            margin: 5px 0;
        }
        /* Reviews Styles */
        #reviewList {
            max-height: 200px;
            overflow-y: auto;
            background-color: #333;
            padding: 10px;
            margin-bottom: 20px;
        }
        #reviewList p {
            margin: 5px 0;
        }
    </style>
</head>
<body>
    <header>
        <h1>FRIENDLY FIRE</h1>
        <p>A place for gamers to share, connect, and play together</p>
    </header>

    <!-- Navigation Menu -->
    <nav>
        <ul>
            <li><a href="#live-chat">Live Chat</a></li>
            <li><a href="#profile">Profile</a></li>
            <li><a href="#game-sessions">Game Sessions</a></li>
            <li><a href="#reviews">Reviews</a></li>
        </ul>
    </nav>

    <!-- Live Chat Section -->
    <section id="live-chat">
        <h2>Live Chat</h2>
        <div id="chatMessages">
            <!-- Live chat messages will appear here -->
        </div>
        <form id="chatForm">
            <input type="text" id="chatUsername" placeholder="Your Name" required>
            <textarea id="chatMessage" placeholder="Your Message" rows="3" required></textarea>
            <button type="submit">Send</button>
        </form>
    </section>

    <!-- Profile Section -->
    <section id="profile">
        <h2>Profile</h2>
        <form id="profileForm">
            <input type="text" id="profileUsername" placeholder="Your Name" required>
            <input type="text" id="profileGame" placeholder="Favorite Game">
            <input type="text" id="profileID" placeholder="In-Game ID/UID">
            <textarea id="profileBio" placeholder="Bio" rows="3"></textarea>
            <button type="submit">Save Profile</button>
        </form>
    </section>

    <!-- Game Sessions Section -->
    <section id="game-sessions">
        <h2>Game Sessions</h2>
        <div id="sessionList">
            <!-- List of scheduled game sessions will appear here -->
        </div>
        <form id="gameSessionsForm">
            <input type="text" id="gameTitle" placeholder="Game Title" required>
            <input type="datetime-local" id="sessionTime" required>
            <textarea id="sessionDetails" placeholder="Session Details" rows="3" required></textarea>
            <button type="submit">Schedule Session</button>
        </form>
    </section>

    <!-- Reviews Section -->
    <section id="reviews">
        <h2>Reviews</h2>
        <div id="reviewList">
            <!-- List of user reviews will appear here -->
        </div>
        <form id="reviewForm">
            <input type="text" id="reviewGame" placeholder="Game Title" required>
            <input type="text" id="reviewID" placeholder="In-Game ID/UID (Optional)">
            <textarea id="reviewMessage" placeholder="Your Review" rows="5" required></textarea>
            <button type="submit">Share Review</button>
        </form>
    </section>

    <!-- Advertisements Section -->
    <section id="ads">
        <h2>Advertisements</h2>
        <p>Ad space available. Contact us for more information.</p>
    </section>

    <footer>
        <p>Website created by Zodin</p>
    </footer>

    <script>
        // JavaScript code for live chat, profile customization, game sessions, reviews, and other functionality
    </script>
</body>
</html>




