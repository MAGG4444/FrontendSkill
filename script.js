// Mock database entry for a user
const playerData = {
    username: "Example_User1",
    bio: "Computer Engineering student from Purdue University",
    isLookingForGroup: true,
    recentActivity: "Jingwen: Delta Force / Tianyu: CS2 / Justin: Valorant",
    topGames: [
        {
            name: "Delta Force",
            rank: "Veteran",
            // A sleek, dark theme placeholder for Delta Force
            img: "deltaforce.png" 
        },
        {
            name: "Counter-Strike 2",
            rank: "Faceit lv.9",
            // A CS-themed orange/yellow placeholder
            img: "counter-strike-2-pc-game-steam-cover.jpg"
        },
        {
            name: "Valorant",
            rank: "Gold",
            // Valorant's signature red color placeholder
            img: "36b52fa8-e71b-4435-888a-cecb98d3876a.jpg"
        }
    ]
};

// Function to populate the DOM once the page loads
document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Populate basic text info
    document.getElementById("player-name").textContent = playerData.username;
    document.getElementById("player-bio").textContent = playerData.bio;
    document.getElementById("recent-activity").textContent = playerData.recentActivity;

    // 2. Set Looking for Group (LFG) Status dynamically
    const statusElement = document.getElementById("lfg-status");
    if (playerData.isLookingForGroup) {
        statusElement.textContent = "🟢 Currently Looking for a Group!";
        statusElement.className = "welcome status-active";
    } else {
        statusElement.textContent = "🔴 Not Looking for a Group.";
        statusElement.className = "welcome status-inactive";
    }

    // 3. Populate games list and images dynamically
    const gamesList = document.getElementById("games-list");
    const gameImages = document.getElementById("game-images");

    playerData.topGames.forEach(game => {
        // Add to bulleted list
        const li = document.createElement("li");
        li.textContent = `${game.name} (Rank: ${game.rank})`;
        gamesList.appendChild(li);

        // Add to image grid
        const figure = document.createElement("figure");
        figure.innerHTML = `
            <img src="${game.img}" alt="${game.name}" loading="lazy" />
            <figcaption>${game.name}</figcaption>
        `;
        gameImages.appendChild(figure);
    });

    // 4. Add interaction to the button
    const inviteBtn = document.getElementById("invite-btn");
    inviteBtn.addEventListener("click", () => {
        alert(`Invite sent to ${playerData.username}! You will be notified when they respond.`);
        inviteBtn.textContent = "Invite Sent!";
        inviteBtn.disabled = true;
        inviteBtn.style.backgroundColor = "gray";
    });
});