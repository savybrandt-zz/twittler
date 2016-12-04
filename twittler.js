$(document).ready(function() {
    var $feed = $('.feed');
    var $results = $('p.results')
    var $resultsHead = $('h3.results')

var formatTime = function(hours, mins) {
  if(hours === 12) {
    return hours + ':' + mins + 'pm';
  } else if(hours >12) {
    hours -= 12;
    return hours + ':' + mins + 'pm';
  } else {
    return hours + ':' + mins + 'am';
  }
};

//automatically loads feed when page opens

  var index = streams.home.length - 1;
   while(index >= 0){
    var tweet = streams.home[index];
    var $tweet = $('<div class=\'feed\'></div>');
    var date = tweet.created_at;
     var $time = formatTime(date.getHours(), date.getMinutes());
      $tweet.text('@' + tweet.user + ': ' + tweet.message + ' (' + $time + ')');
      $tweet.appendTo($feed);
      $tweet.css({'background-color': 'navajowhite', 'border-radius': '10%', 'padding': '5px', 'margin': '10px', 'cursor': 'pointer'});
      index -= 1;
   } 

//press button to see more tweets in feed

  $('button.morefeed').click(function() { 
    var index = streams.home.length - 1;
      while(index >= 0) {
        var tweet = streams.home[index];
        var $tweet = $('<div class=\'feed\'></div>');
        var date = tweet.created_at;
       var $time = formatTime(date.getHours(), date.getMinutes());
       $tweet.text('@' + tweet.user + ': ' + tweet.message + ' (' + $time + ')');
         $tweet.appendTo($feed);
         $tweet.css({'background-color': 'navajowhite', 'border-radius': '10%', 'padding': '5px', 'margin': '10px', 'cursor': 'pointer'});
        index -= 1;
      } 
   });

//populates results from searchbar search  

  $('button.searchbar').click(function() {
    $results.empty();
    var $searchKey = $('input.searchbar').val();
    $('h3.results').css('visibility', 'visible');
    $('button.moreresults').css('visibility', 'visible')
    $resultsHead.text('@' + $searchKey + '\'s Tweets');

    var index = streams.users[$searchKey].length - 1;
      while(index >= 0){
       var tweet = streams.users[$searchKey][index];
         var $tweet = $('<p class=\'results\'></p>');
         var date = tweet.created_at;
         var $time = formatTime(date.getHours(), date.getMinutes());
          $tweet.text('@' + tweet.user + ': ' + tweet.message + ' (' + $time + ')');
          $tweet.appendTo($results);
          $tweet.css({'background-color': 'lightgreen', 'border-radius': '10%', 'padding': '5px', 'margin': '10px', 'cursor': 'pointer'});
         index -= 1; 
      } 
   });

  //click tweet from feed to search user



  //press button to populate more tweets from searched user

  $('button.moreresults').click(function() {
    var $searchKey = $results.text().split(':')[0].split('@')[1];

    var index = streams.users[$searchKey].length - 1;
      while(index >= 0){
       var tweet = streams.users[$searchKey][index];
         var $tweet = $('<p class=\'results\'></p>');
         var date = tweet.created_at;
         var $time = formatTime(date.getHours(), date.getMinutes());
          $tweet.text('@' + tweet.user + ': ' + tweet.message + ' (' + $time + ')');
          $tweet.appendTo($results);
          $tweet.css({'background-color': 'lightgreen', 'border-radius': '10%', 'padding': '5px', 'margin': '10px', 'cursor': 'pointer'});
         index -= 1; 
      } 
   });

 });
