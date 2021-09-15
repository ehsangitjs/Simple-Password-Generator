const { app, BrowserWindow } = require('electron');
app.on('ready',()=>{
    const win = new BrowserWindow({
        webPreferences:{
            nodeIntegration:true,
            contextIsolation:false,
            enableRemoteModule: true,
        },
        width:400,
        height:400,
        minWidth:400,
        minHeight:400,
        maxWidth:400,
        maxHeight:400,
        titleBarStyle:'hidden',
        titleBarOverlay:{
            color:'#139de8',
            symbolColor:'#ffff'
        },
		icon:"favicon.ico",
		title:"Simple Password Generator"
    })
    win.setMenu(null)
    win.loadFile('index.html')
})