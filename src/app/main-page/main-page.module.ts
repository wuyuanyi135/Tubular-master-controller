import { MenuComponent } from './menu/menu.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page.component';

import {
  MatToolbarModule,
  MatSidenavModule,
  MatCheckboxModule,
  MatFormFieldModule,
  MatInputModule,
  MatListModule,
  MatCardModule, MatIconModule
} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MenuService} from '../shared/menu.service';
import {MenuItem} from '../shared/menu-item';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    MatCardModule,
    MatIconModule
  ],
  declarations: [MainPageComponent, MenuComponent],
  exports: [
    MainPageComponent
  ]
})
export class MainPageModule {
  constructor(private menuService: MenuService) {
      menuService.registerMenuItem(new MenuItem('Main Page', '/'));
  }
}
