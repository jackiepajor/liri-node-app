//Added code to read and set any environment variables with the dotenv package
require("dotenv").config();

//Import the keys.js file and store it in variable 'keys'
var keys = require('./keys.js');

//Modules
var fs = require('fs');
var twitter = require('twitter');
var spotify = require('spotify');
var request = require('request');
var tweetArr = [];
var liriCommand = process.argv[2];
var commandParam = process.argv[3];
var movieDefault = "Mr. Nobody";
var songDefault = "The Sign";

var twitterKey = keys.twitterKey;

//var spotify = new Spotify(keys.spotify);

//var client = new Twitter(keys.twitter);


//Process the liri input command
function processInput(command, commandParam) {
    switch(command) {
        
        case 'my-tweets':
            getTweets(); break;
        
        case 'spotify-this-song':
            //If no song is provided, default to "The Sign" by Ace of Base
            if(commandParam === undefined) {
                commandParam = songDefault;
            } getSong(commandParam); break;
        
        case 'movie-this':
            //If no movie is provided, default to "Mr.Nobody" from Netflix
            if(commandParam === undefined) {
                commandParam = movieDefault;
                } getMovie(commandParam); break;

        case 'do-what-it-says':
                doWhatItSays(); break;

        default:
            console.log("Please type one of the following valid command: 'my-tweets', 'spotify-this-song', 'movie-this', 'do-what-it-says'");
    }
}

// *'my-tweets' command function
function getTweets() {
    var twitterParams = {screen_name: 'theezookeeper', count: 20, exclude_replies: true, trim_user: true};
    client.get('statuses/user_timeline', params, function(error, tweets, response) {
        
        if (!error) {
            tweetArr = tweets;
            for(i=0; i<tweetArr.length; i++) {
              console.log('-----------------------------------');
              console.log("Created at: " + tweetArr[i].created_at);
              console.log("Tweets: " + tweetArr[i].text);
              console.log('-----------------------------------');
            }
        } else {
            console.log(error);
        }
    });
}

// *'spotify-this-song' command function
function getSong() {
//If no song is provided, default to "The Sign" by Ace of Base
}