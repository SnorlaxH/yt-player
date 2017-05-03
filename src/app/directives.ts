import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
    selector: '[drt-enter]'
})
export class drtEnter {
    constructor(el: ElementRef, model: Input) {
        el.nativeElement.keydown((e: any) => {
            if (e.keyCode == 13) {
                
            }
        });
        @HostListener('window:keydown', ['$event']) keyboardInput(event: KeyboardEvent) {
            @Host
        }
    }
}