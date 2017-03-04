import { Component } from '@angular/core';
const ipcRenderer = require('electron').ipcRenderer;

@Component({
    moduleId: module.id,
    selector: 'my-player',
    templateUrl: 'play.component.html'
})
export class PlayComponent {
    constructor() {
        
    }
}