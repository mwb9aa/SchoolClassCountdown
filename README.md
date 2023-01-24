# Class Countdown App with Tauri + Vanilla JS
This app creates a countdown for when class is over for each class.

Features:
Countdown opacity: Change opacity on Line 11 of index.html.
Draggable
Resizeable
Opens on a second monitor/screen on the right of the main screen (requires the main and second screen to have a resolution of at least 1920px each): Change the x and y position on line 67 and 68 of tauri.conf.json.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Tauri](https://marketplace.visualstudio.com/items?itemName=tauri-apps.tauri-vscode) + [rust-analyzer](https://marketplace.visualstudio.com/items?itemName=rust-lang.rust-analyzer)


Use Powershell to create a generic html/css/js app
    iwr -useb https://create.tauri.app/ps | iex

Use Cargo to build a development version
    cargo tauri dev

Change the icons in the src-tauri folder
Change tauri.conf.json to reflect the new icons and to change the app identifier

Use Cargo to build a production version
    cargo tauri build

## Instructions for use, after installing tauri
1.  Replace tauri.conf.json in the installation folder with the one download from here. Default location: [app name folder]/[src-tauri]
2. Replace the icons in the installation folder with the ones installed from here (or design your own). Default location: [app name folder]/[src-tauri]/[icons]

## Instructions for use, after installing tauri
1.  Create a list in JavaScript. (Currently this list is on line 3 of main.js)
2.  Run cargo tauri build from your commandline.