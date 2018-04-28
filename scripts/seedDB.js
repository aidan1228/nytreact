const mongoose = require("mongoose");
const db = require("../models");
var cheerio = require("cheerio");
var request = require("request");
mongoose.Promise = global.Promise;

// This file empties the articles collection and inserts the articles below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/reactreadinglist",
  {
    useMongoClient: true
  }
);

const articleSeed = [
  
];

request("https://www.nytimes.com/", function(error, response, html) {

  // Load the HTML into cheerio and save it to a variable
  // '$' becomes a shorthand for cheerio's selector commands, much like jQuery's '$'
  var $ = cheerio.load(html);

  // An empty array to save the data that we'll scrape
  var results = [];

  // With cheerio, find each p-tag with the "title" class
  // (i: iterator. element: the current element)
  $("h2.story-heading").each(function(i, element) {

    // Save the text of the element in a "title" variable
    var title = $(element).text();

    // In the currently selected element, look at its child elements (i.e., its a-tags),
    // then save the values for any "href" attributes that the child elements may have
    var link = $(element).children().attr("href");

    

    // Save these results in an object that we'll push into the results array we defined earlier
    articleSeed.push({
      title: title,
      url: link
    });
  });

  // Log the results once you've looped through each of the elements found with cheerio
  console.log(articleSeed);
});


db.Article
  .remove({})
  .then(() => db.Article.collection.insertMany(articleSeed))
  .then(data => {
    console.log(data.insertedIds.length + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
