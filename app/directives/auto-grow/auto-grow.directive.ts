import {Directive, ElementRef, Renderer} from '@angular/core';

@Directive({
    selector: '[autoGrow]',
    host:{
        '(focus)': 'onFocus()',
        '(blur)': 'onBlur()'
    }
})
export class AutoGrowDirective {

    constructor(private element: ElementRef, private renderer: Renderer){

    }

    onFocus(){
        this.renderer.setElementStyle(this.element.nativeElement, 'width', '200');
    }

    onBlur(){
        this.renderer.setElementStyle(this.element.nativeElement, 'width', '120');
    }
}
