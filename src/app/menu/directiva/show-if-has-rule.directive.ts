import { Directive, ElementRef, Input, OnInit, Renderer } from '@angular/core';

import { UserService } from '../../service/user.service';

@Directive({
    selector: '[appShowMenuIfHasRuleDirective]'
})
export class ShowMenuIfHasRuleDirective implements OnInit {

    @Input()
    nomePerfil: string;

    constructor(
        private element: ElementRef,
        private renderer: Renderer,
        private userService: UserService) {
    }

    ngOnInit(): void {
        if (!this.userService.hashPerfil(this.nomePerfil)) {
            this.renderer.setElementStyle(this.element.nativeElement, 'display', 'none');
        }
    };
}

