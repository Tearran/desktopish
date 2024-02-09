// Sytem tray
        // Create a system tray
		function createSystemTray() {
			// Create a new button
			var button = document.createElement('button');
			button.id = 'start-notes';

			// Get the container div
			var container = document.getElementById('container');

			// Append the button to the container div
			container.appendChild(button);
		}
        // Update the time every second
		function updateTime() {
			// Create a new Date object
			var now = new Date();
			// Get the current hours, minutes, and seconds
			var hours = now.getUTCHours() - 7; // Convert to Phoenix time
			var minutes = now.getUTCMinutes();
			var seconds = now.getUTCSeconds();
			// Adjust for date rollover
			if (hours < 0) {
				hours += 24;
			}
			// Get the 'start-notes' button
			var button = document.getElementById('start-notes');
			// Update the button text
			button.innerHTML = hours + ':' + minutes + ':' + seconds + ' | ' + now.getUTCHours() + ':' + now.getUTCMinutes() + ':' + now.getUTCSeconds() + ' <i class="fa fa-comment-slash"></i>';
		}
		createSystemTray();
		setInterval(updateTime, 1000); // Update the time every second
	
	