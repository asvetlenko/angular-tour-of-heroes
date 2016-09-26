import {Directive, ElementRef, Input, Renderer, HostListener} from '@angular/core';
import {OnInit} from '@angular/core';

@Directive({
    selector: '[my-highlight]'
})
export class MyHighlightDirective implements OnInit{
    private _defaultColor = 'red';
    @Input() set defaultColor(colorName: string){
        this._defaultColor = colorName || this._defaultColor;
    }

    constructor(private el: ElementRef, private renderer: Renderer){

    }

    ngOnInit(): void {
        this.highlight(this._defaultColor);
    }

    @Input('my-highlight')
    myHighlight: string;

    @HostListener('mouseenter')
    onMouseEnter() {
        this.highlight(this.myHighlight || this._defaultColor);
    }

    @HostListener('mouseleave')
    onMouseLeave(){
        this.highlight(null);
    }

    private highlight(color: string){
        this.renderer.setElementStyle(this.el.nativeElement, 'backgroundColor', color);
    }
}
