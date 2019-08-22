import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ShowMenuIfHasRuleDirective } from "./directiva/show-if-has-rule.directive";
import { MenuComponent } from "./menu.component";

@NgModule({
    declarations: [
        MenuComponent,
        ShowMenuIfHasRuleDirective
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