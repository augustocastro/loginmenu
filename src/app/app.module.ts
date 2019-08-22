import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app.routing.module';
import { MenuComponent } from './menu/menu.component';
import { ShowMenuIfHasRuleDirective } from './menu/directiva/show-if-has-rule.directive';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MenuComponent,
    ShowMenuIfHasRuleDirective
  ],
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  exports: [
    RouterModule,
    LoginComponent,
    MenuComponent,
    ShowMenuIfHasRuleDirective
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
