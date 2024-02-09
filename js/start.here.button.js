
function changeIframeSrc(data, divId) {
    var iframe = document.getElementById("iframe");
    var windowElement = document.querySelector(".window");
    var tasksDiv = document.getElementById("tasks"); // Get the tasks div
    var menuDiv = document.getElementById(divId); // Get the existing div by its id
    menuDiv.className += " menu"; // Add the class name "menu" to the div

    for (var i = 0; i < data.length; i++) {
        var button = document.createElement("button");
        button.className = "custom-button"; // Assign the class name "custom-button" to the button
        button.innerHTML = '<i class="' + data[i].icon + ' image-button"></i>' + '<span>' + data[i].name + '</span>';
        button.dataset.key = data[i].name; // Store the key as a data attribute
        button.onclick = function() {
            iframe.src = data.find(item => item.name === this.dataset.key).url; // Use the stored key to get the URL
            if (windowElement.style.display === "none") {
                windowElement.style.display = "block";
            }
            tasksDiv.style.display = 'none'; // Hide the tasks when a window is shown
            resetWindow();
        };
        menuDiv.appendChild(button); // Add the button to the menu div
    }
}
function toggleTasks(tasksDivId) {
    var tasks = document.getElementById(tasksDivId);
    if (tasks.style.display !== 'flex') {
        tasks.style.display = 'flex';
        tasks.style.zIndex = 9999;
    } else {
        tasks.style.display = 'none';
        tasks.style.zIndex = 1;
    }
}




		var svgDocument = document.getElementById("svg-object")?.contentDocument;
		var svgElement = svgDocument?.querySelector('svg');
		if (svgElement) {
			svgElement.style.fill = "#00ff00";
		}
		// Add the event listener to the 'toggleButton'
		document.getElementById('toggleButton').addEventListener('click', function() {
			toggleTasks("tasks");
		});
		document.querySelector('.fullscreen').addEventListener('click', function() {
		document.getElementById('window').style.zIndex = "1000";
		});
		document.querySelector('.reset').addEventListener('click', function() {
		document.getElementById('window').style.zIndex = "9999";
		});
       