import { Component } from '@angular/core';
const ipcRenderer = require('electron').ipcRenderer;

declare var componentHandler: any;

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html'
})
export class AppComponent {


  constructor() {
    ipcRenderer.on("reply", (event, arg) => {
      console.log("Reply was " + arg);
    });
  }

  public Title: string = "재생목록";
  public text_small: string = "Greatness awaits..."

  public test(): void {
    console.log("Getestet");
    ipcRenderer.send("message", "tested");
  }

  ngAfterContentChecked() {
    componentHandler.upgradeAllRegistered();
  }
}