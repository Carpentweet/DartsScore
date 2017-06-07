var gameSettings;
var playerOne;
var playerTwo;

//On click of overlay ok button
$("#okbtn").click(function(){
    //Update player 1 name
    $("#player1name").val($("nameone").val());
    //Close the overlay
    $("#overlay").hide("slow");
})