import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import {LoggerModule} from 'ngx-logger';

@NgModule({
  imports: [
    CommonModule,
    LoggerModule.forChild()
  ],
  declarations: []
})
export class SharedModule { }
