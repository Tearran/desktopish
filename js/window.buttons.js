
		// closeWindow.js
		function closeWindow() {
			document.querySelector(".close").addEventListener("click", function() {
				document.getElementById("window").style.display = "none";
			});
		}
		// toggleFullScreen.js
		function openWindow() {
			var isFullScreen = false; // Flag to track if the page is in full screen mode
			document.querySelector(".fullscreen").addEventListener("click", function() {
				if (isFullScreen) {
					// If the page is in full screen mode, exit full screen
					if (document.exitFullscreen) {
						document.exitFullscreen();
					} else if (document.webkitExitFullscreen) {
						/* Safari */
						document.webkitExitFullscreen();
					} else if (document.msExitFullscreen) {
						/* IE11 */
						document.msExitFullscreen();
					}
				} else {
					// If the page is not in full screen mode, go full screen
					if (document.documentElement.requestFullscreen) {
						document.documentElement.requestFullscreen();
					} else if (document.documentElement.webkitRequestFullscreen) {
						/* Safari */
						document.documentElement.webkitRequestFullscreen();
					} else if (document.documentElement.msRequestFullscreen) {
						/* IE11 */
						document.documentElement.msRequestFullscreen();
					}
				}
				// Toggle the flag
				isFullScreen = !isFullScreen;
			});
		}
		// toggleWindow.js
		function resetWindow() {
			var windowElement = document.querySelector(".window");
			var isFullScreen = false; // Flag to track if the window is in full screen mode
			document.querySelector(".reset").addEventListener("click", function() {
				if (isFullScreen) {
					// If the window is in full screen mode, reset it
					windowElement.style.height = "calc(100vh - 128px)";
					windowElement.style.top = "64px";
				} else {
					// If the window is not in full screen mode, open it
					windowElement.style.height = "100%";
					windowElement.style.top = "0";
				}
				// Toggle the flag
				isFullScreen = !isFullScreen;
			});
		}