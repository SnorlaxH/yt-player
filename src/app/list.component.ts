import { Component } from '@angular/core';
const ipcRenderer = require('electron').ipcRenderer;

@Component({
    moduleId: module.id,
    selector: 'my-list',
    templateUrl: 'list.component.html'
})
export class ListComponent {
    constructor() {
        
    }
}