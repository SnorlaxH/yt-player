import { Component } from '@angular/core';
const ipcRenderer = require('electron').ipcRenderer;

@Component({
    moduleId: module.id,
    selector: 'my-list',
    templateUrl: 'list.component.html'
})
export class ListComponent {
    public IS_SEARCH: boolean = false;

    constructor() {

    }

    public searchMode(isSearch: boolean) {
        this.IS_SEARCH = isSearch;
        console.log(this.IS_SEARCH);
    }
}