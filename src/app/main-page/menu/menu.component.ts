import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'src/app/shared/menu-item';
import { MenuService } from 'src/app/shared/menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menu: Array<MenuItem>;

  constructor(menu: MenuService) {

    this.menu = menu.getMenuItems();
  }
  ngOnInit() {
  }

}
