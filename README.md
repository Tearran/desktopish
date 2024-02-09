# Welcome to Simulated Desktop

Simulated Desktop is a project that aims to simulate a desktop environment within a web browser. It's a HTML5 template system that resembles a classic Linux desktop, providing a taskbar, start menu, system tray, and window decorations with simple close and button.

## Why Simulate a Desktop?

As cloud computing and web applications become more prevalent, the traditional desktop environment is evolving. Simulated Desktop is our response to this evolution. It simulates a desktop environment in a web browser, providing a familiar interface for users while leveraging the flexibility and accessibility of web technologies.

Simulated Desktop is designed to offer a consistent and intuitive interface across a variety of devices. From high-powered desktop PCs to low-end mobile devices, its goal is to simplify the access and management of applications, regardless of the hardware used.

## Design Limitations

Simulated Desktop is designed with certain constraints to ensure optimal performance and resource usage. Here are some intentional limitations:

- **Single Window**: Simulated Desktop is designed to support only one active window at a time. This design choice helps to keep the interface simple and the resource usage minimal.
- **Static Icon Locations**: The locations of the icons are static. This is a deliberate design decision to maintain a consistent user interface.

Please note that these limitations are by design and are not planned to be addressed in future versions of Simulated Desktop.

## Getting Started
## Quick Start Guide

Follow these steps to quickly get started with Simulated Desktop:

- For Linux users with a GUI, switch to a TTY login by pressing `Ctrl + Alt + F[number]` (replace `[number]` with a number from 1 to 6), log in, and then proceed with the following steps:

1. Clone the repository:

  ```
 https://github.com/Tearran/desktopish.git
  ```

2. Navigate to the cloned directory:

  ```
 cd desktopish.git
  ```

3. Run the server:

  ```
  bash ./server.sh
  ```

- For Windows users, open Command Prompt and follow the same steps 1-3, but use the following command to run the server:

  ```
  server.bat
  ```

Please note that Python is required to run the server.

After starting the server, open your HTML5-compatible browser and navigate to `http://127.0.0.1:8000` to start using Simulated Desktop. Enjoy!

## Navigating the Desktop

The desktop includes several features to help you navigate:

- **Taskbar**: Located at the bottom of the screen, the taskbar allows you to manage your open windows and access the start menu.
- **Start Menu**: Click the start button in the taskbar to open the start menu. From here, you can access all the features of the simulated desktop.
- **System Tray**: Located at the top of the screen, the system tray provides notifications and system status information.
- **Window Decorations**: Each window includes a title bar with close and full screen buttons. Click the close button to close the window, or the full screen button to maximize the window.

## Customizing Your Desktop

You can customize the look and feel of your desktop by modifying the CSS files in the `css/` directory. Here's what each file does:

- `main.css`: Contains the main styles for the desktop.
- `taskbar.css`: Contains the styles for the taskbar.
- `startmenu.css`: Contains the styles for the start menu.
- `tray.css`: Contains the styles for the tray.
- `window.css`: Contains the styles for the window decoration.

If you want to modify the functionality of the desktop, you can do so by changing the JavaScript files in the `js/` directory. Here's what each file does:

- `main.js`: Controls the overall functionality of the desktop.
- `taskbar.js`: Contains the JavaScript for the taskbar functionality.
- `startmenu.js`: Contains the JavaScript for the start menu functionality.
- `tray.js`: Contains the JavaScript for the tray functionality.
- `window.js`: Contains the JavaScript for the window decoration functionality.

## License

Simulated Desktop is open source and available under the [GPL 2.0 License](LICENSE).
