const { app, BrowserWindow } = require('electron');

let win;

function createWindow() {
const win = new BrowserWindow({
  transparent: true,
  frame: false,
  titleBarStyle: 'hidden',
  titleBarOverlay: {
    color: '#2f3241',
    symbolColor: '#74b1be'
  },
  webPreferences: {
    nodeIntegration: true
  }
})
win.show()

  if (process.env.DEBUG) {
    win.loadURL(`http://localhost:3000`);
  } else {
    win.loadURL(`file://${__dirname}/build/index.html`);
  }


  //win.loadFile('index.html');
  //win.loadURL(`file://${__dirname}/build/index.html`);
  //win.loadURL(`http://localhost:3000`);

  win.on('closed', () => {
    win = null;
  });
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (win === null) {
    createWindow();
  }
});