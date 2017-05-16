import { Component, ChangeDetectorRef } from '@angular/core';
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
  constructor(private appService: AppService, private changeDetectorRef: ChangeDetectorRef) {
    
  }

  public Title: string = "재생목록";
  IS_SEARCH: boolean = false;
  bg: boolean = false;
  FTR: number = 0;
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

  setBackground(visible: boolean): void {
    this.appService.setBackground(visible);
  }

  search(): void {
    this.setBackground(true);
    ipcRenderer.send('search', this.searchText);
  }

  ngOnInit() {
    this.appService.searchUpdated.subscribe(
      (IS_SEARCH: boolean) => {
        this.searchText = '';
        this.IS_SEARCH = IS_SEARCH;
        this.FTR = IS_SEARCH ? 0 : 3;
      }
    )
    this.appService.footerUpdated.subscribe(
      (FTR: number) => {
        this.FTR = FTR;
      }
    )
    this.appService.backgroundUpdated.subscribe(
      (visible: boolean) => {
        this.bg = visible;
        this.changeDetectorRef.detectChanges();
      }
    )
  }

  ngAfterContentChecked() {
    componentHandler.upgradeAllRegistered();
  }
}