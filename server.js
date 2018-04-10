const express =require("express");
const request =require("request");
const cheerio = require("cheerio");
const mongojs = require("mongojs");

var app = express();

app.use(express.static("public"));

var databaseurl = "todayscrape";
var collections = ["scrapedData"];
var db = mongojs(databaseurl,collections);

db.on("error",function(error){
	console.log("Database connection error:",error);
});
//first page of the scraping
app.get("/",function(req,res){
	res.send("Welcome to the first page");
});
//getting all scraped data by json format
app.get("/all",function(req,res){
	db.scrapedData.find({},function(err,data){
		if(err){
			console.log(err);
		}
		else{
			res.json(data);
		}
	});
});
//scraping data from newyork times
app.get("/scrap",function(req,res){
	request("https://www.nytimes.com/",function(err,response,html){
		var $=cheerio.load(html);
		 $(".story-heading").each(function(i, element) {
      // Save the text and href of each link enclosed in the current element
      var title = $(element).children("a").text();
      var link = $(element).children("a").attr("href");
      	//if title and link is scrapping correctly, then run the below code
		if(title&&link){
			db.scrapedData.insert({
				title:title,
				link:link
			},
			function(err,inserted){
				if(err){
					console.log(err);
				}
				else{
					console.log(inserted)
				}
			});
		}
		});
	});
res.send("Scraped!");
});
app.listen(3000,function(){
	console.log("App listening Port : 3000");
});
