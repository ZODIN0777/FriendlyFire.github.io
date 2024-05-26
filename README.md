<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>FRIENDLY FIRE - Official Website</title>
    <style>
        /* Your CSS styles here */
    </style>
</head>
<body>
    <header>
        <h1>FRIENDLY FIRE</h1>
        <p>A place for gamers to share, connect, and play together</p>
    </header>

    <!-- Home Page with Live Chat -->
    <div class="home-page">
        <div class="live-chat">
            <h2>Live Chat with Fellow Gamers</h2>
            <div id="chatMessages"></div>
            <form id="chatForm">
                <input type="text" id="chatUsername" placeholder="Your Name" required>
                <textarea id="chatMessage" placeholder="Your Message" rows="3" required></textarea>
                <button type="submit">Send</button>
            </form>
        </div>
    </div>

    <!-- Options Menu with Customize Profile, Organize Game Sessions, and Review Option -->
    <div class="options-menu">
        <div class="dropdown">
            <button class="dropbtn">&#8286;</button> <!-- Unicode for three dots -->
            <div class="dropdown-content">
                <a href="#" id="customizeProfileBtn">Customize Profile</a>
                <a href="#" id="organizeGameSessionsBtn">Organize Game Sessions</a>
                <a href="#" id="shareReviewBtn">Share Gaming Experience</a>
            </div>
        </div>
    </div>

    <!-- Customize Profile Modal -->
    <div id="customizeProfileModal" class="modal">
        <div class="modal-content">
            <span class="close">&times;</span>
            <h2>Customize Your Profile</h2>
            <form id="profileForm">
                <input type="text" id="profileUsername" placeholder="Your Name" required>
                <input type="text" id="profileGame" placeholder="Favorite Game">
                <input type="text" id="profileID" placeholder="In-Game ID/UID">
                <textarea id="profileBio" placeholder="Bio" rows="3"></textarea>
                <button type="submit">Save Profile</button>
            </form>
        </div>
    </div>

    <!-- Organize Game Sessions Modal -->
    <div id="organizeGameSessionsModal" class="modal">
        <div class="modal-content">
            <span class="close">&times;</span>
            <h2>Organize Game Sessions</h2>
            <form id="gameSessionsForm">
                <input type="text" id="gameTitle" placeholder="Game Title" required>
                <input type="datetime-local" id="sessionTime" required>
                <textarea id="sessionDetails" placeholder="Session Details" rows="3" required></textarea>
                <button type="submit">Schedule Session</button>
            </form>
        </div>
    </div>

    <!-- Share Review Modal -->
    <div id="shareReviewModal" class="modal">
        <div class="modal-content">
            <span class="close">&times;</span>
            <h2>Share Your Gaming Experience</h2>
            <form id="reviewForm">
                <input type="text" id="reviewGame" placeholder="Game Title" required>
                <input type="text" id="reviewID" placeholder="In-Game ID/UID (Optional)">
                <textarea id="reviewMessage" placeholder="Your Review" rows="5" required></textarea>
                <button type="submit">Share Review</button>
            </form>
        </div>
    </div>

    <!-- Advertisements Section -->
    <div class="ads">
        <h2>Advertisements</h2>
        <p>Ad space available. Contact us for more information.</p>
    </div>

    <footer>
        <p>Website created by Zodin</p>
    </footer>

    <script>
        // JavaScript code for live chat, customize profile modal, organize game sessions modal, review modal, and other functionality
    </script>
</body>
</html>


