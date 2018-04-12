function displayScraped(data){
	$(".scrapedData-container").empty();	//clearing the element whatever inside of it

	data.forEach(function(scraps){  	//looping the data what was collected by Json type
	console.log(scraps);
	$(".scrapedData-container").append("<div class='content'>"+
	"<div class='scrap-title'>Head Line : " + scraps.title+"<button class='btn button-primary savebtn'>"+"Save it"+"</button>"+
	"<button class='btn button-primary notebtn'>"+"Note"+"</button>"+"</div>"+"<div class='scrap-link'>Link : "
	+ scraps.link +"</div>"+"</div>");
	});
}

$.getJSON("/all", function(data) { 		//gettubg data and passit to diplayscraped function to display on front end 
 
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
