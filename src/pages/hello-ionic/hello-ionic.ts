import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Page1Page } from '../page1/page1';
import { CategoriesPage} from '../categories/categories'


@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage {
  constructor(private navCntrl: NavController) {
    
  }

  page1Page(){
    this.navCntrl.push(CategoriesPage);
  }
}
