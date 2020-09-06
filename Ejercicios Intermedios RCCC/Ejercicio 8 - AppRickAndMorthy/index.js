const {app, BrowserWindow } = require('electron');

let mainWindow; /*MI VENTANA*/

function createWindow(){
	mainWindow = new BrowserWindow({
		width: 800,
		height: 600 
	});
	mainWindow.loadFile('index.html');
}

app.on('ready', createWindow);