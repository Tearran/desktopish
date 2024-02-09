// Desktop
		// Change desktop background image
		var images = [

			'./imgs/armian-gento-sun-min.png',
			'./imgs/tearran.armbian-wall.png',
            './imgs/tera_by_tearran.jpg'
		]; // Add more image URLs to this array
		var currentImageIndex = 0;

		function changeBackgroundImage() {
			document.body.style.backgroundImage = 'url(' + images[currentImageIndex] + ')';
			currentImageIndex = (currentImageIndex + 1) % images.length;
		}
		// Change the background image immediately when the page loads
		changeBackgroundImage();
		// Then change the background image every 60 seconds
		setInterval(changeBackgroundImage, 60000);
