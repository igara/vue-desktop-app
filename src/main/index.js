'use strict'

import { app, BrowserWindow, screen, Menu } from 'electron'

/**
 * Set `__static` path to static files in production
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-static-assets.html
 */
if (process.env.NODE_ENV !== 'development') {
  global.__static = require('path').join(__dirname, '/static').replace(/\\/g, '\\\\')
}

let mainWindow
let menu
const winURL = process.env.NODE_ENV === 'development'
  ? `http://localhost:9080`
  : `file://${__dirname}/index.html`

function createWindow () {
  const size = screen.getPrimaryDisplay().size // ディスプレイのサイズを取得する
  /**
   * Initial window options
   */
  mainWindow = new BrowserWindow({
    left: 0,
    top: 0,
    width: size.width,
    height: size.height,
    frame: false,
    show: true,
    transparent: true,
    resizable: false,
    'always-on-top': true
  })
  mainWindow.setIgnoreMouseEvents(true)
  app.dock.hide()
  mainWindow.loadURL(winURL)

  mainWindow.on('closed', () => {
    mainWindow = null
  })

  menu = Menu.buildFromTemplate([
    {
      label: 'Xmas',
      submenu: [
        {label: 'Exit', click: onExit}
      ]
    }
  ])

  Menu.setApplicationMenu(menu)
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('browser-window-blur', () => {
  mainWindow.setAlwaysOnTop(true)
})

app.on('blur', () => {
  mainWindow.setAlwaysOnTop(true)
})

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow()
  }
})

function onExit () {
  app.quit()
}

/**
 * Auto Updater
 *
 * Uncomment the following code below and install `electron-updater` to
 * support auto updating. Code Signing with a valid certificate is required.
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-electron-builder.html#auto-updating
 */

/*
import { autoUpdater } from 'electron-updater'

autoUpdater.on('update-downloaded', () => {
  autoUpdater.quitAndInstall()
})

app.on('ready', () => {
  if (process.env.NODE_ENV === 'production') autoUpdater.checkForUpdates()
})
 */
