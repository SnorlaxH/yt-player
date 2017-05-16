import {Directive, ElementRef, HostListener, Input, Output, EventEmitter, ChangeDetectorRef } from '@angular/core';

@Directive({
    selector: '[drt-enter]'
})
export class drtEnter {
    @Output('drt-enter') callback: EventEmitter<any> = new EventEmitter();
    
    constructor(private changeDetectorRef: ChangeDetectorRef) {

    }

    @HostListener('keydown', ['$event'])
    drtEnter(e: KeyboardEvent) {
        if(e.keyCode == 13) {
            this.callback.emit();    
            this.changeDetectorRef.detectChanges();
        }
    }
}

@Directive({
    selector: '[drtLast]'
})
export class drtLast {
    @Input() drtLast: Boolean;
    @Output() callback: EventEmitter<boolean> = new EventEmitter();

    constructor() {
        if(drtLast) {
            this.callback.emit(false);
        }
    }
}