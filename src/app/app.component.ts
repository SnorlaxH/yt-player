import { Component } from '@angular/core';
import { AppService } from './app.service';
const ipcRenderer = require('electron').ipcRenderer;

declare var componentHandler: any;

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html',
  providers: [AppService]
})
export class AppComponent {
  constructor(private appService: AppService) {
    ipcRenderer.on("reply", (event, arg) => {
    });
  }

  public Title: string = "재생목록";
  IS_SEARCH: boolean = false;

  getSearch(): boolean {
    return this.appService.getSearch();
  }

  setSearch(isSearch: boolean): void {
    this.appService.setSearch(isSearch);
  }

  ngAfterContentChecked() {
    componentHandler.upgradeAllRegistered();
  }
}