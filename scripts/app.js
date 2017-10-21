
var quotes = [
	'Discover the style that empowers you and makes you fall in love over and over',
	'Kara Sara will celebrate her imperfections',
	'You are a masterpiece and you deserve to be dressed in one',
	// 'Quote 4'
]

var quoteIndex = 1;

setInterval(function(){
	$(".quote p").fadeOut(function() {
	  	$(this).text(quotes[quoteIndex]).fadeIn();
	  	quoteIndex = (quoteIndex+1)%quotes.length;
	});	
}, 6000);