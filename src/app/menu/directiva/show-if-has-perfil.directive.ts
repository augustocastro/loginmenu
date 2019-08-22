import { Directive, ElementRef, Input, OnInit, Renderer } from '@angular/core';

import { UserService } from '../../service/user.service';
import { ItemMenu } from 'src/app/model/ItemMenu';

@Directive({
    selector: '[appShowMenuIfHasPerfilDirective]'
})
export class ShowMenuIfHasPerfilDirective implements OnInit {

    @Input()
    itemMenu: ItemMenu;

    constructor(
        private element: ElementRef,
        private renderer: Renderer,
        private userService: UserService) {
    }

    ngOnInit(): void {
        if (!this.userService.userHasPermission(this.itemMenu.permissoes)) {
            this.renderer.setElementStyle(this.element.nativeElement, 'display', 'none');
        }
    };
}

