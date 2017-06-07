$("#dartboard #areas g").children().hover(
	function(){
		$(this).css("opacity","0.6");
	},
	function(){
		$(this).css("opacity","1");
	}
)

$(".textfield").click(
	function() {
		$(this).val("");
})