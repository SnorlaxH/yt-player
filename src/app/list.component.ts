import { Component } from '@angular/core';
import { AppService } from './app.service';
const ipcRenderer = require('electron').ipcRenderer;

declare var componentHandler: any;

@Component({
    moduleId: module.id,
    selector: 'my-list',
    templateUrl: 'list.component.html'
})
export class ListComponent {
    constructor(private appService: AppService) {

    }

    IS_SEARCH: boolean = false;

    ngOnInit() {
        this.appService.searchUpdated.subscribe(
            (IS_SEARCH: boolean) => {
                this.IS_SEARCH = IS_SEARCH;
                console.log('List', this.IS_SEARCH);
            }
        )
    }

    ngAfterContentChecked() {
        componentHandler.upgradeAllRegistered();
    }
}