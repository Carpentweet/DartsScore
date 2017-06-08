
//Game settings object
function gameSettings(players, player1name, player2name) {
    noPlayers = players,
    this.player1name = player1name,
    this.player2name = player2name
    playerturn = 1;
    turncount = 0;
}

//Player object
function player(score, name) {
    this.score = score
    this.name = name
    this.updateScore = function(roundScore) {
        this.score -= roundScore;
    }
}

