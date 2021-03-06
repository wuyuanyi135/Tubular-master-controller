import { MenuItem } from './../shared/menu-item';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MenuService } from '../shared/menu.service';
import {NativeService} from '../shared/native.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  constructor(public native: NativeService) {}

  ngOnInit() {

  }

}
