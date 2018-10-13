import { MenuItem } from './menu-item';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  private menu: Array<MenuItem>
  registerMenuItem(menuItem: MenuItem) {
    this.menu.push(menuItem);
  }
  getMenuItems(): Array<MenuItem> {
    return this.menu;
  }
  constructor() {
    this.menu = new Array<MenuItem>()
  }
}
