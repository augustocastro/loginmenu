import { Component, OnInit } from '@angular/core';

import { ItemMenu } from '../model/ItemMenu';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
})
export class MenuComponent implements OnInit {

  public menu: ItemMenu[];

  ngOnInit() {
    this.menu = [
      new ItemMenu('Comum', []),
      new ItemMenu('Financeiro', ['Financeiro']),
      new ItemMenu('Gerencial', ['Financeiro', 'Gerencial']), 
    ]
  }
}
