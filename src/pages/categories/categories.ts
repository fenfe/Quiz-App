import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Page1Page } from '../page1/page1';
import {QuizData} from '../../app/model/Properties';
import { DataStoreProvider } from '../../providers/data-store/data-store';

@IonicPage()
@Component({
  selector: 'page-categories',
  templateUrl: 'categories.html',
})
export class CategoriesPage {
  Data = QuizData;
  constructor(public navCtrl: NavController, public navParams: NavParams, private datastore: DataStoreProvider) {}

  ionViewDidLoad() {
    console.log(this.Data);
  }
  page1Page(title, Qs){
    this.datastore.setData(Qs)
    this.navCtrl.push(Page1Page, title);
  }
}
