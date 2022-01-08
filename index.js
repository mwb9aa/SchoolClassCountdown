const { app, BrowserWindow } = require("electron");


const createWindow = () => {
    const configs = {
        width: 500,
        height: 300,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        },
        frame: false,
        transparent: true
    };

    const window = new BrowserWindow(configs);

    window.loadFile("index.html");
};



//app.whenReady().then(createWindow);
app.on('ready', function () {
    setTimeout(function() {
        createWindow();
    }, 10);
});

// In some file from the main process like main.js
const {ipcMain} = require('electron');

// Attach listener in the main process with the given ID
ipcMain.on('request-mainprocess-action', (event, arg) => {
    // Displays the object sent from the renderer process:
    //{
    //    message: "Hi",
    //    someData: "Let's go"
    //}
    console.log( arg );
    app.exit();
});
//ipc.Main.on('request-mainprocess-action', app.exit());
