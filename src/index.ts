'use strict';

const electron : Electron.ElectronMainAndRenderer = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const ipcMain = electron.ipcMain;

const google = require('googleapis');
const youtube = google.youtube('v3');

var mainWindow : Electron.BrowserWindow = null;

app.on('window-all-closed', () => {
  if (process.platform != 'darwin') {
    app.quit();
  }
});

app.on('ready', () => {
  mainWindow = new BrowserWindow({width: 450, height: 700});
  mainWindow.loadURL('file://' + __dirname + '/index.html');
  mainWindow.webContents.openDevTools();
  mainWindow.on('closed', () =>  {
    mainWindow = null;
  });
});

app.on('window-all-closed', function() {
  if(process.platform != 'darwin'){
    app.quit();
  }
})

ipcMain.on('message', (event, arg) => {
  console.log(`Received ${arg}`);
  event.sender.send("reply", "pong");
});

ipcMain.on('search', (event, arg) => {
  youtube.search.list({
    q: arg,
    part: 'snippet',
    regionCode: 'KR',
    key: 'AIzaSyBC896i0COJfC5IsZ72nQepumCHoMd_IqI'
  },
  (err: any, data: any) => {
    if(err) {
      console.error('Error: ' + err);
      event.sender.send('search:error', err);
    }

    if(data) {
      console.log(data);
      event.sender.send('search:result', data);
    }
  })
})
