import { MenuComponent } from './menu/menu.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page.component';

import { MatToolbarModule, MatSidenavModule, MatCheckboxModule, MatFormFieldModule, MatInputModule } from "@angular/material";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule
  ],
  declarations: [MainPageComponent, MenuComponent],
  exports: [
    MainPageComponent
  ]
})
export class MainPageModule { }
