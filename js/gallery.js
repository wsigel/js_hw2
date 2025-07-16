function upDate(previewPic){
 /* In this function you should 
    1) change the url for the background image of the div with the id = "image" 
    to the source file of the preview image
    
    2) Change the text  of the div with the id = "image" 
    to the alt text of the preview image 
    */
    
    var imageDiv = document.getElementById("image");
    imageDiv.style.backgroundImage = "url('" + previewPic.src + "')";
    imageDiv.innerHTML = previewPic.alt;
	}

	function unDo(){
     /* In this function you should 
    1) Update the url for the background image of the div with the id = "image" 
    back to the orginal-image.  You can use the css code to see what that original URL was
    
    2) Change the text  of the div with the id = "image" 
    back to the original text.  You can use the html code to see what that original text was
    */
	var imageDiv = document.getElementById("image");
    imageDiv.style.backgroundImage = "url('')";	
    imageDiv.style.backgroundColor = "#8e68ff";
    imageDiv.innerHTML = "Hover over an image below to display here.";
    }

    function enableTabIndex() {
        let images = document.querySelectorAll('.preview');

        let imageDiv = document.getElementById("image");
        imageDiv.setAttribute('tabindex', '0');

        for(let i = 0; i < images.length; i++) {
            images[i].setAttribute('tabindex', '0');
            console.log(`Tabindex set for image: ${images[i].src}`);
        }
    }