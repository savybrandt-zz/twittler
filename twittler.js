$(document).ready(function() {
    var $feed = $('.feed');

     var index = streams.home.length - 1;
      while(index >= 0){
        var tweet = streams.home[index];
         var $tweet = $('<div class=\'feed\'></div>');
         $tweet.text('@' + tweet.user + ': \n' + tweet.message);
         $tweet.appendTo($feed);
         $tweet.css({'border': 'solid navajowhite 3px', 'background-color': 'navajowhite', 'border-radius': '10%', 'padding': '5px', 'margin': '10px'})
        index -= 1;

      }
  
 });
