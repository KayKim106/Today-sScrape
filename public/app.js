function displayScraped(data){
	$(".scrapedData-container").empty();

	data.forEach(function(scraps){
	console.log(scraps);
	$(".scrapedData-container").append("<div class='content'>"+
	"<div class='scrap-title'>Head Line : " + scraps.title+"<button class='btn button-primary savebtn'>"+"Save it"+"</button>"+
	"<button class='btn button-primary notebtn'>"+"Note"+"</button>"+"</div>"+"<div class='scrap-link'>Link : "
	+ scraps.link +"</div>"+"</div>");
	});
}

$.getJSON("/all", function(data) {
  // Call our function to generate a table body
  displayScraped(data);
});

$(".scraps").on("click",function(){
	
	$.getJSON("/all",function(data){
		count =(data.length);

		
		displayScraped(data);
		alert("New"+" "+count+" "+"Articles are scrapped!");
	});
	
});
$(".saved").on("click",function(){
})