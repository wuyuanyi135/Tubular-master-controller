import {MenuComponent} from './menu/menu.component';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MainPageComponent} from './main-page.component';
import {
  MatToolbarModule,
  MatSidenavModule,
  MatCheckboxModule,
  MatFormFieldModule,
  MatInputModule,
  MatListModule,
  MatCardModule, MatIconModule, MatButtonModule
} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MenuService} from '../shared/menu.service';
import {MenuItem} from '../shared/menu-item';
import {MainPageContentComponent} from './main-page-content/main-page-content.component';
import {SharedModule} from '../shared/shared.module';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    RouterModule.forChild([{path: '', redirectTo: '/homepage', pathMatch: 'full'}, {path: 'homepage', component: MainPageContentComponent}])
  ],
  declarations: [MainPageComponent, MenuComponent, MainPageContentComponent],
  exports: [
    MainPageComponent
  ]
})
export class MainPageModule {
  constructor(private menuService: MenuService) {
  }
}
