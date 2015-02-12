// background image generator

Template.backgroundImage.helpers ({
	background: function() {
	var myurls = ["images/back1.jpg", "images/back2.jpg", "images/back3.jpg", "images/back4.jpg",
	 "images/back5.jpg", "images/back6.jpg", "images/back7.jpg", "images/back8.jpg", "images/back9.jpg", "images/back10.jpg"];
	var the_random_url = Random.choice(myurls);
	console.log(the_random_url);
	return the_random_url;
	// var background = the_random_url;
	}
});