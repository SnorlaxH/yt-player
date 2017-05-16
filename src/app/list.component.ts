import { Component, ChangeDetectorRef } from '@angular/core';
import { AppService } from './app.service';
const ipcRenderer = require('electron').ipcRenderer;

declare var componentHandler: any;

@Component({
    moduleId: module.id,
    selector: 'my-list',
    templateUrl: 'list.component.html'
})
export class ListComponent {
    IS_SEARCH: boolean = false;
    MUSIC: Array<Object> = [];

    constructor(private appService: AppService, private changeDetectorRef: ChangeDetectorRef) {
        ipcRenderer.on("search:error", (event, arg) => {
            console.log(event, arg);
            this.setBackground(false);
            this.changeDetectorRef.detectChanges();
        });

        ipcRenderer.on('search:result', (event, arg) => {
            this.setBackground(false);
            if (arg != undefined && arg.items != undefined) {
                this.MUSIC.splice(0, this.MUSIC.length);
                for (let i = 0; i < arg.items.length; i++) {
                    let item = arg.items[i];
                    let info = item.snippet;
                    this.MUSIC.push({
                        ID: item.id.videoId,
                        TITLE: info.title,
                        CHANNEL: info.channelTitle,
                        THUMBNAIL: info.thumbnails.high || info.thumnails.default
                    });
                }
            }
            this.changeDetectorRef.detectChanges();    
        });
    }

    setBackground(visible: boolean): void {
        this.appService.setBackground(visible);
    }

    ngOnInit() {
        this.appService.searchUpdated.subscribe(
            (IS_SEARCH: boolean) => {
                this.IS_SEARCH = IS_SEARCH;
            }
        )

        if (!this.IS_SEARCH) {

        }
    }

    ngAfterContentChecked() {
        componentHandler.upgradeAllRegistered();
    }
}