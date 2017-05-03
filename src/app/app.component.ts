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
    ipcRenderer.on("search:error", (event, arg) => {
      console.log(event, arg);
    });

    ipcRenderer.on('search:result', (event, arg) => {
      console.log(event, arg);
    });
  }

  public Title: string = "재생목록";
  IS_SEARCH: boolean = false;
  bg: boolean = false;
  FTR: number = 3;
  public menus: Object = [
    {
      TITLE: '재생 목록에 담기',
      CONT: '맨 끝',
      ICON: {
        TITLE: '',
        CONT: 'done'
      }
    },
    {
      TITLE: '플레이리스트에 담기',
      CONT: '',
      ICON: {
        TITLE: '',
        CONT: ''
      }
    }
  ];
  searchText: string = '';

  getSearch(): boolean {
    return this.appService.getSearch();
  }

  setSearch(isSearch: boolean): void {
    this.appService.setSearch(isSearch);
  }

  search(): void {
    ipcRenderer.send('search', this.searchText);
  }

  ngOnInit() {
    this.appService.searchUpdated.subscribe(
      (IS_SEARCH: boolean) => {
        this.IS_SEARCH = IS_SEARCH;
        console.log('App', this.IS_SEARCH);
      }
    )
    this.appService.footerUpdated.subscribe(
      (FTR: number) => {
        this.FTR = FTR;
      }
    )
  }

  ngAfterContentChecked() {
    componentHandler.upgradeAllRegistered();
  }
}