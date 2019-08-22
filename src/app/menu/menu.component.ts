import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
})
export class MenuComponent implements OnInit {

  public menu: string[];

  ngOnInit() {
    this.menu = [
      'Gerencial',
      'Financeiro'
    ]
  }
}
