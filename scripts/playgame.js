var gameSettings;
var playerOne;
var playerTwo;

//On click of overlay ok button
$("#okbtn").click(function(){
    var players;
    var name1 = $("nameone").val();
    var name2;
    var score = $("optionScore").val();
    playerOne = new player(score, name1);
    if ($("noplayers1").checked) {
        players = 1;
    }
    else {
        players = 2;
        name2 = $("nametwo").val();
        playerTwo = new player(score, name2);
    }

    gameSettings = new gameSettings(players, name1, name2);
    //Close the overlay
    $("#overlay").hide("slow");
})

$("path").click(function(){
     var clickAttr = $(this).attr("id");
     var multi = clickAttr.charAt(0);
     clickAttr = clickAttr.replace(multi, "");
     var dartScore = parseInt(clickAttr);
     if(multi = "d") {
         dartScore = dartScore * 2;
     }
     else if(multi == "t") {
         dartScore = dartScore * 3;
     }

     if (gameSettings.playerTurn == 1) {
         updateDartScore(playerOne, dartScore);
     }
     else{
         updateDartScore(playerTwo, dartScore);
     }
})

var updateDartScore = function(player, dartScore) {
    player.updateScore(dartScore);
}