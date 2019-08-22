import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ShowMenuIfHasPerfilDirective } from "./directiva/show-if-has-perfil.directive";
import { MenuComponent } from "./menu.component";

@NgModule({
    declarations: [
        MenuComponent,
        ShowMenuIfHasPerfilDirective
    ],
    exports: [
        MenuComponent,
    ],
    imports: [
        CommonModule,
    ]
})
export class MenuModule {
}