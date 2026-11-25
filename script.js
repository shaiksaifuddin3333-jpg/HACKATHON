// =====================================================
// GAMING TOURNAMENT PORTAL
// COMPLETE JAVASCRIPT
// =====================================================


// =====================================================
// LOGIN
// =====================================================

function loginUser() {

    let username =
        document.getElementById("loginUsername").value.trim();

    let password =
        document.getElementById("loginPassword").value;

    let message =
        document.getElementById("loginMessage");


    if (username === "") {

        message.innerHTML =
            "❌ Please enter your username.";

        return;
    }


    if (password === "") {

        message.innerHTML =
            "❌ Please enter your password.";

        return;
    }


    if (password.length < 8) {

        message.innerHTML =
            "❌ Password must be at least 8 characters.";

        return;
    }


    message.innerHTML =
        "✅ Login Successful! Welcome " +
        username +
        " 🎮";


    document.getElementById("login").style.display =
        "none";

    document.getElementById("mainWebsite").style.display =
        "block";

    window.scrollTo(0, 0);
}



// =====================================================
// LOGOUT
// =====================================================

function logoutUser() {

    document.getElementById("mainWebsite").style.display =
        "none";

    document.getElementById("login").style.display =
        "flex";


    document.getElementById("loginUsername").value = "";

    document.getElementById("loginPassword").value = "";

    document.getElementById("loginMessage").innerHTML =
        "";

    window.scrollTo(0, 0);
}



// =====================================================
// JOIN TOURNAMENT
// =====================================================

function showMessage() {

    document.getElementById("register").scrollIntoView({
        behavior: "smooth"
    });

}



// =====================================================
// TOURNAMENT REGISTRATION
// =====================================================

function registerTournament(tournamentName) {

    let playerName =
        prompt("Enter your Player Name:");


    if (
        playerName === null ||
        playerName.trim() === ""
    ) {

        alert("❌ Registration cancelled.");

        return;
    }


    let email =
        prompt("Enter your Email:");


    if (
        email === null ||
        email.trim() === ""
    ) {

        alert("❌ Please enter your email.");

        return;
    }


    if (!email.includes("@")) {

        alert("❌ Please enter a valid email.");

        return;
    }


    alert(
        "✅ Tournament Registration Successful!\n\n" +

        "Player Name: " +
        playerName +

        "\nEmail: " +
        email +

        "\nTournament: " +
        tournamentName
    );

}



// =====================================================
// PLAYER REGISTRATION FORM
// =====================================================

function submitRegistration() {

    let playerName =
        document.getElementById("playerName").value.trim();

    let playerEmail =
        document.getElementById("playerEmail").value.trim();

    let playerGame =
        document.getElementById("playerGame").value;

    let playerId =
        document.getElementById("playerId").value.trim();

    let playerPhone =
        document.getElementById("playerPhone").value.trim();

    let message =
        document.getElementById("registrationMessage");


    if (playerName === "") {

        message.innerHTML =
            "❌ Please enter player name.";

        return;
    }


    if (playerEmail === "") {

        message.innerHTML =
            "❌ Please enter email.";

        return;
    }


    if (playerGame === "") {

        message.innerHTML =
            "❌ Please select a game.";

        return;
    }


    if (playerId === "") {

        message.innerHTML =
            "❌ Please enter player ID.";

        return;
    }


    if (playerPhone === "") {

        message.innerHTML =
            "❌ Please enter phone number.";

        return;
    }


    // Save player information

    localStorage.setItem("playerName", playerName);
    localStorage.setItem("playerGame", playerGame);
    localStorage.setItem("playerEmail", playerEmail);
    localStorage.setItem("playerId", playerId);
    localStorage.setItem("playerPhone", playerPhone);


    // Update dashboard

    document.getElementById("dashboardPlayer").innerText =
        playerName;

    document.getElementById("dashboardGame").innerText =
        playerGame;


    message.innerHTML =
        "✅ Registration successful! Welcome " +
        playerName +
        " 🎮🏆";


    // Update rank and points

    updateDashboardRank();

}



// =====================================================
// LOAD PLAYER DATA
// =====================================================

function loadPlayerDashboard() {

    let playerName =
        localStorage.getItem("playerName");

    let playerGame =
        localStorage.getItem("playerGame");

    let teamName =
        localStorage.getItem("teamName");

    let teamGame =
        localStorage.getItem("teamGame");


    // Player

    if (playerName) {

        document.getElementById("dashboardPlayer").innerText =
            playerName;
    }


    // Game

    if (playerGame) {

        document.getElementById("dashboardGame").innerText =
            playerGame;
    }


    // Team

    if (teamName) {

        document.getElementById("dashboardTeam").innerText =
            teamName;
    }


    // Team Game

    if (teamGame) {

        document.getElementById("dashboardGame").innerText =
            teamGame;
    }


    // Next Match

    let dashboardMatch =
        document.getElementById("dashboardMatch");

    if (dashboardMatch) {

        dashboardMatch.innerText =
            "Match 01 - BGMI - 12 Sep 2026, 10:00 AM";
    }


    // Rank and Points

    updateDashboardRank();

}



// =====================================================
// TEAM CREATION
// =====================================================

function createTeam() {

    let teamName =
        prompt("Enter your Team Name:");


    if (
        teamName === null ||
        teamName.trim() === ""
    ) {

        alert("❌ Please enter a team name.");

        return;
    }


    let captainName =
        prompt("Enter Captain Name:");


    if (
        captainName === null ||
        captainName.trim() === ""
    ) {

        alert("❌ Please enter captain name.");

        return;
    }


    alert(
        "👥 Team Created Successfully!\n\n" +

        "Team Name: " +
        teamName +

        "\nCaptain: " +
        captainName
    );

}



// =====================================================
// TEAM CREATION FORM
// =====================================================

function submitTeam() {

    let teamName =
        document.getElementById("teamName").value.trim();

    let captainName =
        document.getElementById("captainName").value.trim();

    let teamGame =
        document.getElementById("teamGame").value;

    let player2 =
        document.getElementById("player2").value.trim();

    let player3 =
        document.getElementById("player3").value.trim();

    let player4 =
        document.getElementById("player4").value.trim();

    let message =
        document.getElementById("teamMessage");


    if (teamName === "") {

        message.innerHTML =
            "❌ Please enter team name.";

        return;
    }


    if (captainName === "") {

        message.innerHTML =
            "❌ Please enter captain name.";

        return;
    }


    if (teamGame === "") {

        message.innerHTML =
            "❌ Please select a game.";

        return;
    }


    if (
        player2 === "" ||
        player3 === "" ||
        player4 === ""
    ) {

        message.innerHTML =
            "❌ Please enter all players.";

        return;
    }


    // Save team information

    localStorage.setItem("teamName", teamName);
    localStorage.setItem("captainName", captainName);
    localStorage.setItem("teamGame", teamGame);


    // Update dashboard

    document.getElementById("dashboardTeam").innerText =
        teamName;

    document.getElementById("dashboardGame").innerText =
        teamGame;


    message.innerHTML =
        "✅ Team created successfully! 🎮👥🏆";

}



// =====================================================
// MATCH SCHEDULE
// =====================================================

function viewMatch(
    game,
    match,
    date,
    time,
    status
) {

    alert(

        "🎮 MATCH DETAILS\n\n" +

        "Game: " +
        game +

        "\nMatch: " +
        match +

        "\nDate: " +
        date +

        "\nTime: " +
        time +

        "\nStatus: " +
        status
    );

}



// =====================================================
// LEADERBOARD SORTING
// =====================================================

function sortLeaderboard() {

    let table =
        document.getElementById("leaderboardTable");


    if (!table) {

        return;
    }


    let rows =
        Array.from(table.tBodies[0].rows);


    rows.sort(function(a, b) {

        let pointsA =
            parseInt(a.cells[4].innerText) || 0;

        let pointsB =
            parseInt(b.cells[4].innerText) || 0;

        return pointsB - pointsA;

    });


    rows.forEach(function(row, index) {

        row.cells[0].innerText =
            index + 1;

        table.tBodies[0].appendChild(row);

    });


    updateDashboardRank();


    alert(
        "🏆 Leaderboard updated successfully!"
    );

}



// =====================================================
// UPDATE DASHBOARD RANK AND POINTS
// =====================================================

function updateDashboardRank() {

    let playerName =
        localStorage.getItem("playerName");


    if (!playerName) {

        return;
    }


    let table =
        document.getElementById("leaderboardTable");


    if (!table) {

        return;
    }


    let rows =
        Array.from(
            table.querySelectorAll("tbody tr")
        );


    let found = false;


    rows.forEach(function(row, index) {

        let player =
            row.cells[1].innerText.trim();


        if (
            player.toLowerCase() ===
            playerName.toLowerCase()
        ) {

            let rank =
                index + 1;


            let points =
                row.cells[4].innerText.trim();


            document.getElementById(
                "dashboardRank"
            ).innerText = rank;


            document.getElementById(
                "dashboardPoints"
            ).innerText = points;


            found = true;
        }

    });


    if (!found) {

        document.getElementById(
            "dashboardRank"
        ).innerText = "--";


        document.getElementById(
            "dashboardPoints"
        ).innerText = "0";
    }

}



// =====================================================
// LIVE SCORE
// =====================================================

function updateScore() {

    let score1 =
        document.getElementById("score1");

    let score2 =
        document.getElementById("score2");

    let message =
        document.getElementById("liveMessage");


    if (!score1 || !score2) {

        return;
    }


    let currentScore1 =
        parseInt(score1.innerText) || 0;

    let currentScore2 =
        parseInt(score2.innerText) || 0;


    currentScore1 += 1;
    currentScore2 += 1;


    score1.innerText =
        currentScore1;

    score2.innerText =
        currentScore2;


    if (message) {

        message.innerHTML =
            "🔥 Live Score Updated Successfully!";
    }

}



// =====================================================
// PRIZE CLAIM
// =====================================================

// =====================================================
// PRIZE CLAIM STATUS UPDATE
// =====================================================

function claimPrize(prizeName) {

    let rows =
        document.querySelectorAll("#prizeTable tbody tr");

    let found = false;


    rows.forEach(function(row) {

        let teamName =
            row.cells[1].innerText.trim();


        if (teamName === prizeName) {

            row.cells[4].innerText =
                "✅ Prize Claimed";


            row.cells[5].innerHTML =
                "✅ Claimed";


            found = true;
        }

    });


    let message =
        document.getElementById("prizeMessage");


    if (found) {

        if (message) {

            message.innerHTML =
                "✅ Prize claimed successfully for " +
                prizeName +
                " 🏆";
        }

    } else {

        if (message) {

            message.innerHTML =
                "❌ Prize winner not found.";
        }

    }

}


// =====================================================
// SPECTATOR COMMENT
// =====================================================

// =====================================================
// SPECTATOR COMMENTS
// =====================================================

function postComment() {

    let nameInput =
        document.getElementById("spectatorName");

    let commentInput =
        document.getElementById("spectatorComment");

    let commentList =
        document.getElementById("commentsList");


    if (!nameInput || !commentInput || !commentList) {

        return;
    }


    let name =
        nameInput.value.trim();

    let comment =
        commentInput.value.trim();


    // Validation

    if (name === "") {

        alert("❌ Please enter your name.");

        return;
    }


    if (comment === "") {

        alert("❌ Please write a comment.");

        return;
    }


    // Create new comment

    let newComment =
        document.createElement("div");

    newComment.className =
        "comment";


    newComment.innerHTML =
        "<strong>🎮 " +
        name +
        "</strong>" +
        "<p>💬 " +
        comment +
        "</p>";


    // Add comment to list

    commentList.appendChild(newComment);


    // Clear inputs

    nameInput.value = "";

    commentInput.value = "";


    alert(
        "✅ Comment posted successfully!"
    );

}
// =====================================================
// TOURNAMENT SEARCH & FILTER
// =====================================================

function filterTournaments() {

    let search =
        document.getElementById("tournamentSearch")
        .value
        .toLowerCase();

    let game =
        document.getElementById("gameFilter").value;

    let tournaments =
        document.querySelectorAll(".tournament-item");


    tournaments.forEach(function(card) {

        let text =
            card.innerText.toLowerCase();


        let gameMatch =
            game === "all" ||
            text.includes(game.toLowerCase());


        let searchMatch =
            text.includes(search);


        if (gameMatch && searchMatch) {

            card.style.display =
                "block";

        } else {

            card.style.display =
                "none";
        }

    });

}



// =====================================================
// RESET TOURNAMENT FILTER
// =====================================================

function resetTournamentFilter() {

    document.getElementById(
        "tournamentSearch"
    ).value = "";


    document.getElementById(
        "gameFilter"
    ).value = "all";


    let tournaments =
        document.querySelectorAll(".tournament-item");


    tournaments.forEach(function(card) {

        card.style.display =
            "block";

    });

}



// =====================================================
// PAGE LOAD
// =====================================================

window.onload = function () {

    loadPlayerDashboard();

};

function clearComments() {
    let commentList = document.getElementById("commentsList");

    if (!commentList) return;

    let confirmDelete = confirm("Are you sure you want to clear all comments?");

    if (confirmDelete) {
        localStorage.removeItem("spectatorComments");

        commentList.innerHTML = "";

        alert("✅ All comments cleared successfully!");
    }
}

/* ================= LOGIN VALIDATION ================= */

function validateLogin() {

    let username = document.getElementById("loginUsername").value.trim();
    let password = document.getElementById("loginPassword").value;
    let confirmPassword =
        document.getElementById("loginConfirmPassword").value;

    let message = document.getElementById("loginMessage");

    if (username === "") {
        message.innerHTML = "❌ Please enter username.";
        return false;
    }

    if (password === "") {
        message.innerHTML = "❌ Please enter password.";
        return false;
    }

    if (password.length < 8) {
        message.innerHTML =
            "❌ Password must contain at least 8 characters.";
        return false;
    }

    if (confirmPassword === "") {
        message.innerHTML = "❌ Please confirm your password.";
        return false;
    }

    if (password !== confirmPassword) {
        message.innerHTML = "❌ Passwords do not match.";
        return false;
    }

    message.innerHTML = "✅ Login validation successful!";
    return false;
}