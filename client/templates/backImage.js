var images = ['back1.jpg', 'back2.jpg'];
    
    //Build the img, then do a bit of maths to randomize load and append to a div. 
    //Add a touch off css to fade them badboys in all sexy like.
$('<img class=" class="fade-in" src="images/' + images[Math.floor(Math.random() * images.length)] + '">').appendTo('#banner-load');    


