function displayScraped(data){
	$(".scrapedData-container").empty();

	data.forEach(function(scraps){
	console.log(scraps);
	$(".scrapedData-container").append("<div class='content'>"+"<div class='scrap-title'>" + scraps.title+"</div>"+
															   "<div class='scrap-link'>" + scraps.link +"</div>"+
									   "</div>");
	});
}

$.getJSON("/all", function(data) {
  // Call our function to generate a table body
  displayScraped(data);
});

$(".saved").on("click",function(){
	$.getJSON("/all",function(data){
		displayScraped(data);
	});
	alert("clicked!");
});