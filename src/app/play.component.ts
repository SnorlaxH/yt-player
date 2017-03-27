import { Component } from '@angular/core';
import { AppService } from './app.service';

const ipcRenderer = require('electron').ipcRenderer;

@Component({
    moduleId: module.id,
    selector: 'my-player',
    templateUrl: 'play.component.html'
})
export class PlayComponent {
    constructor(private appService: AppService) {
        
    }

    IS_SEARCH: boolean = false;

    ngOnInit() {
        this.appService.searchUpdated.subscribe(
            (IS_SEARCH: boolean) => {
                this.IS_SEARCH = IS_SEARCH;
            }
        )
    }
}