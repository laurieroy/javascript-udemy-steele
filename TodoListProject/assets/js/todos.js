//check off specific lis by clicking. on only works on exisiting ele so 
// had to change from li to ul and specify when click on li do this
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

//click on x to del todo
$("ul").on("click", "span", function(e){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
	e.stopPropagation();
});

$("input[type='text']").keypress(function(e){
	if (e.which === 13) {
		//grabbing new text from input
		var todoText = $(this).val();
		//blank out
		$(this).val("");
		//creating a new li and add to ul
		$("ul").append("<li><span><i class='fa fa-trash-alt'></i></span> " + todoText + "</li>");
	}
});
$("#toggle-form").click(function(){
	$("input[type='text']").fadeToggle()
});